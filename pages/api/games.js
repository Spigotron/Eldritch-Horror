const sql = require('mssql');
require('dotenv').config();

const config = {
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    encrypt: true,
  },
};

export default async function handler(req, res) {
  console.log("API request received for /api/games");

  try {
    console.log("Connecting to database...");
    await sql.connect(config);
    console.log("Connected to database.");

    const result = await sql.query`
    WITH PlayerSlots AS (
      SELECT DISTINCT
        w.Game_ID,
        w.Player_Slot,
        p.Player_Name,
        'P' + CAST(w.Player_Slot AS VARCHAR) + ': ' + p.Player_Name AS PlayerEntry
      FROM WhoPlayedWhom w
      LEFT JOIN Players p ON w.Player_ID = p.Player_ID
      WHERE w.Investigator_Order = 1 -- Ensures only the first investigator per slot is considered
    ),
    InvestigatorSlots AS (
      SELECT 
        w.Game_ID,
        w.Player_Slot,
        'I' + CAST(w.Player_Slot AS VARCHAR) + ': ' + 
        STRING_AGG(
          CASE 
            WHEN i.Investigator_Name = 'Death' THEN N'💀'  -- Directly use the emoji for "Death"
            ELSE i.Investigator_Name 
          END, 
          ', '
        ) AS InvestigatorEntry
      FROM WhoPlayedWhom w
      LEFT JOIN Investigators i ON w.Investigator_ID = i.Investigator_ID
      GROUP BY w.Game_ID, w.Player_Slot
    )
    SELECT 
        g.Game_ID,
        g.Date,
        g.Ancient_One,
        g.Victory,
        g.Score,
        g.Player_Count,
        g.Investigator_Count,
        COALESCE(STRING_AGG(ps.PlayerEntry, CHAR(10)), '') AS Players,
        COALESCE(STRING_AGG(islot.InvestigatorEntry, CHAR(10)), '') AS Investigators, -- New line separator for I# groups
        g.Notes
    FROM Games g
    LEFT JOIN PlayerSlots ps ON g.Game_ID = ps.Game_ID
    LEFT JOIN InvestigatorSlots islot ON g.Game_ID = islot.Game_ID AND ps.Player_Slot = islot.Player_Slot
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