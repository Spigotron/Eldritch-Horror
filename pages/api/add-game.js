import dbConfig from "../../dbConfig";
import sql from "mssql";

export default async function handler(req, res) {
  console.log("Method received:", req.method);
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    date,
    ancientOne,
    victory,
    score,
    playerCount,
    playerInvestigators,
    notes,
  } = req.body;

  try {
    // Connect to DB
    await sql.connect(dbConfig);
    // Debug: log config and current database
    console.log("Connected config:", dbConfig);
    const currentDb = await new sql.Request().query(`SELECT DB_NAME() AS CurrentDB`);
    console.log("Running in database:", currentDb.recordset[0].CurrentDB);

    // Debug: list available tables
    const tables = await new sql.Request().query(
      `SELECT TABLE_SCHEMA, TABLE_NAME FROM INFORMATION_SCHEMA.TABLES ORDER BY TABLE_SCHEMA, TABLE_NAME`
    );
    console.log("Available tables:", tables.recordset);

    // Flatten for Games table
    const players = playerInvestigators.map(p => p.player).join(", ");
    const investigators = playerInvestigators
      .flatMap(p => p.investigators.filter(name => name))
      .join(", ");

    const request = new sql.Request();
    request.input("Date",       sql.Date,      date);
request.input("AncientOne", sql.NVarChar,  ancientOne);
request.input("Victory",    sql.Bit,       victory === true ? 1 : 0);
request.input("Score",      sql.Int,       victory === true ? score : null);
request.input("PlayerCount",sql.Int,       playerCount);
request.input("Notes",      sql.NVarChar(sql.MAX), notes);


    console.log("Submitting game with:", {
      date, ancientOne, victory, score, playerCount, players, investigators, notes
    });

    // Use correct schema name in INSERT
    const result = await request.query(`
      INSERT INTO Games (
        Date, Ancient_One, Victory, Score, Player_Count, Notes
      )
      OUTPUT INSERTED.Game_ID
      VALUES (
        @Date, @AncientOne, @Victory, @Score, @PlayerCount, @Notes
      )
    `);

    const gameID = result.recordset[0].Game_ID;

    // Insert into WhoPlayedWhom
    for (let slot = 0; slot < playerInvestigators.length; slot++) {
      const entry = playerInvestigators[slot];
      const playerRes = await sql.query`
        SELECT Player_ID FROM dbo.Players WHERE Player_Name = ${entry.player}
      `;
      const playerID = playerRes.recordset[0]?.Player_ID;
      if (!playerID) {
        console.error(`Player not found: ${entry.player}`);
        return res.status(400).json({ error: `Player not found: ${entry.player}` });
      }

      for (let i = 0; i < entry.investigators.length; i++) {
        const invName = entry.investigators[i];
        if (!invName) continue;

        const invRes = await sql.query`
          SELECT Investigator_ID FROM dbo.Investigators WHERE Investigator_Name = ${invName}
        `;
        const investigatorID = invRes.recordset[0]?.Investigator_ID;
        if (!investigatorID) {
          console.error(`Investigator not found: ${invName}`);
          return res.status(400).json({ error: `Investigator not found: ${invName}` });
        }

        await sql.query`
          INSERT INTO dbo.WhoPlayedWhom (
            Game_ID, Player_ID, Investigator_ID, Player_Slot, Investigator_Slot
          )
          VALUES (
            ${gameID}, ${playerID}, ${investigatorID}, ${slot + 1}, ${i + 1}
          )
        `;
      }
    }

    res.status(200).json({ message: "Game added successfully" });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: error.message });
  } finally {
    sql.close();
  }
}
