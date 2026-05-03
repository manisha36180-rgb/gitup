require('dotenv').config({ path: '.env.local' });
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "marine_db",
  password: process.env.DB_PASSWORD || "Manisha36180",
  port: parseInt(process.env.DB_PORT || "5432"),
  connectionTimeoutMillis: 2000,
});

async function run() {
  try {
    const { rows } = await pool.query('SELECT id FROM "Vessel"');
    console.log("DB Vessels IDs:", rows.map(r => r.id));
  } catch (err) {
    console.error("DB Error:", err);
  }
  pool.end();
}
run();
