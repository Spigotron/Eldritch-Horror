const sql = require('mssql');
require('dotenv').config();

// Config to connect to Azure SQL Database using credentials in .env file
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true, // Azure requires encryption
  },
};

module.exports = async (req, res) => {
  try {
    // Connect to the database
    await sql.connect(config);
    
    // Run a query
    const result = await sql.query`SELECT * FROM Games`;
    
    // Send the data back as JSON
    res.status(200).json(result.recordset);
  } catch (err) {
    console.error("Database query failed:", err);
    res.status(500).json({ error: 'Database query failed' });
  } finally {
    await sql.close(); // Close connection
  }
};