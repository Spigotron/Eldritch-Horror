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
  console.log("API request received for /api/players");

  try {
    console.log("Connecting to database...");
    await sql.connect(config);
    console.log("Connected to database.");

    const result = await sql.query`
      SELECT Player_ID, Player_Name FROM Players;
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
