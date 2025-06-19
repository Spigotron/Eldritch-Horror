const sql = require('mssql');
require('dotenv').config();

const config = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
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
WITH PlayerLines AS (
  SELECT
    w.Game_ID,
    'P' + CAST(w.Player_Slot AS VARCHAR) + ': ' + p.Player_Name AS Line
  FROM WhoPlayedWhom w
  LEFT JOIN Players p ON w.Player_ID = p.Player_ID
  GROUP BY w.Game_ID, w.Player_Slot, p.Player_Name
),
InvestigatorLines AS (
  SELECT
    w.Game_ID,
    'I' + CAST(w.Player_Slot AS VARCHAR) + ': ' +
    STRING_AGG(
      CASE 
        WHEN i.Investigator_Name = 'Death' THEN N'💀'
        ELSE i.Investigator_Name 
      END, ', '
    ) AS Line
  FROM WhoPlayedWhom w
  LEFT JOIN Investigators i ON w.Investigator_ID = i.Investigator_ID
  GROUP BY w.Game_ID, w.Player_Slot
),
AggregatedPlayers AS (
  SELECT Game_ID, STRING_AGG(Line, CHAR(10)) AS Players
  FROM PlayerLines
  GROUP BY Game_ID
),
AggregatedInvestigators AS (
  SELECT Game_ID, STRING_AGG(Line, CHAR(10)) AS Investigators
  FROM InvestigatorLines
  GROUP BY Game_ID
)

SELECT 
  g.Game_ID,
  g.Date,
  g.Ancient_One,
  g.Victory,
  g.Score,
  g.Player_Count,
  COALESCE(p.Players, '') AS Players,
  COALESCE(i.Investigators, '') AS Investigators,
  g.Notes
FROM Games g
LEFT JOIN AggregatedPlayers p ON g.Game_ID = p.Game_ID
LEFT JOIN AggregatedInvestigators i ON g.Game_ID = i.Game_ID;
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
