const sql = require("mssql");
require("dotenv").config();

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
  try {
    await sql.connect(config);
    const result = await sql.query`
      SELECT Investigator_ID, Investigator_Name FROM Investigators
    `;
    const sorted = result.recordset.sort((a, b) =>
      a.Investigator_Name.localeCompare(b.Investigator_Name)
    );
    res.status(200).json(sorted);
  } catch (err) {
    console.error("Error fetching investigators:", err);
    res.status(500).json({ error: "Database error" });
  } finally {
    await sql.close();
  }
}
