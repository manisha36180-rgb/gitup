const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgres://default:A6K3VWeLqXvi@ep-lingering-mountain-a1k6i1o6-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"
});

async function run() {
  try {
    const res = await pool.query('SELECT COUNT(*) FROM "Vessel"');
    console.log("Total vessels:", res.rows[0].count);
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
}
run();
