const sql = require('mssql');
require('dotenv').config();

// Config to connect to Azure SQL Database using credentials in .env file
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
  try {
    console.log("Connecting to database...");
    // Connect to the database
    await sql.connect(config);
    console.log("Connected to database.");

    // Run a query
    const result = await sql.query`SELECT * FROM Games`;
    console.log("Query executed, data fetched:", result.recordset);

    // Send the data back as JSON
    res.status(200).json(result.recordset);
  } catch (err) {
    console.error("Database query failed:", err);
    res.status(500).json({ error: 'Database query failed' });
  }
}