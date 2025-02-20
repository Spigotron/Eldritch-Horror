import sql from "mssql";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { date, ancientOne, victory, score, playerCount, investigatorCount, players, investigators, notes } = req.body;

  try {
    await sql.connect(dbConfig);
    await sql.query(`
      INSERT INTO Games (Date, Ancient_One, Victory, Score, Player_Count, Investigator_Count, Players, Investigators, Notes)
      VALUES ('${date}', '${ancientOne}', '${victory}', '${score}', '${playerCount}', '${investigatorCount}', '${players}', '${investigators}', '${notes}')
    `);
    res.status(200).json({ message: "Game added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  } finally {
    sql.close();
  }
}
