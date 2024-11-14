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
  console.log("API request received for /api/games"); // Log request received

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
    console.error("Full error stack:", err.stack); // Logs the full error stack for debugging
    res.status(500).json({
      error: 'Database query failed',
      message: err.message,
      details: err.stack // Including detailed stack trace in the response (useful for debugging)
    });
  } finally {
    // Close connection to the database in the "finally" block to ensure it always gets closed
    await sql.close();
    console.log("Database connection closed.");
  }
}
