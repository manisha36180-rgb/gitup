import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

export const pool = new Pool(
  connectionString 
    ? { connectionString, ssl: { rejectUnauthorized: false } }
    : {
        user: process.env.DB_USER || "postgres",
        host: process.env.DB_HOST || "localhost",
        database: process.env.DB_NAME || "marine_db",
        password: process.env.DB_PASSWORD || "Manisha36180",
        port: parseInt(process.env.DB_PORT || "5432"),
      }
);

// Helper to check if DB is available
export async function isDbConnected() {
  try {
    const client = await pool.connect();
    client.release();
    return true;
  } catch (err) {
    console.error("Database connection failed:", err);
    return false;
  }
}
