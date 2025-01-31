const sql = require('mssql');
require('dotenv').config();

// Config to connect to Azure SQL Database
const config = {
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    encrypt: true, // Azure requires encryption
  },
};

// Default export function to handle requests
export default async function handler(req, res) {
  console.log("API request received for /api/games");

  try {
    console.log("Connecting to database...");
    await sql.connect(config);
    console.log("Connected to database.");

    // **Updated Query**
    const result = await sql.query`
  WITH PlayerSlots AS (
    SELECT 
      w.Game_ID,
      w.Player_Slot,
      p.Player_Name,
      'P' + CAST(w.Player_Slot AS VARCHAR) + ': ' + p.Player_Name AS PlayerEntry
    FROM WhoPlayedWhom w
    LEFT JOIN Players p ON w.Player_ID = p.Player_ID
    WHERE w.Investigator_Order = 1 -- Ensuring we only take the first investigator per slot
  )
  SELECT 
      g.Game_ID,
      g.Date,
      g.Ancient_One,
      g.Victory,
      g.Score,
      g.Player_Count,
      g.Investigator_Count,
      COALESCE(STRING_AGG(ps.PlayerEntry, CHAR(10)), '') AS Players, -- Concatenating player names
      g.Notes
  FROM Games g
  LEFT JOIN PlayerSlots ps ON g.Game_ID = ps.Game_ID
  GROUP BY g.Game_ID, g.Date, g.Ancient_One, g.Victory, g.Score, g.Player_Count, g.Investigator_Count, g.Notes;
`;



    console.log("Query executed, data fetched:", result.recordset);

    res.status(200).json(result.recordset);
  } catch (err) {
    console.error("Database query failed:", err);
    res.status(500).json({ error: 'Database query failed', message: err.message });
  } finally {
    await sql.close();
    console.log("Database connection closed.");
  }
};
