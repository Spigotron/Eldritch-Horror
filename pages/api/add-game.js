import dbConfig from "../../dbConfig";
import sql from "mssql";

export default async function handler(req, res) {
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
    await sql.connect(dbConfig);

    // Flatten playerInvestigators to strings
    const players = playerInvestigators.map(p => p.player).join(", ");
    const investigators = playerInvestigators
      .flatMap(p => p.investigators.filter(name => name)) // remove empty strings
      .join(", ");

    const request = new sql.Request();
    request.input("Date", sql.Date, date);
    request.input("AncientOne", sql.NVarChar, ancientOne);
    request.input("Victory", sql.Bit, victory);
    request.input("Score", sql.Int, score);
    request.input("PlayerCount", sql.Int, playerCount);
    request.input("Players", sql.NVarChar(sql.MAX), players);
    request.input("Investigators", sql.NVarChar(sql.MAX), investigators);
    request.input("Notes", sql.NVarChar(sql.MAX), notes);

    await request.query(`
      INSERT INTO Games (
        Date, Ancient_One, Victory, Score, Player_Count, Players, Investigators, Notes
      ) VALUES (
        @Date, @AncientOne, @Victory, @Score, @PlayerCount, @Players, @Investigators, @Notes
      )
    `);

    res.status(200).json({ message: "Game added successfully" });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Database error" });
  } finally {
    sql.close();
  }
}
