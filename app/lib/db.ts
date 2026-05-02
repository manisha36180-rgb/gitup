import { Pool } from "pg";

const isProduction = process.env.NODE_ENV === "production";
const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

// Only use local defaults if NOT in production OR if explicitly requested
export const pool = new Pool(
  connectionString 
    ? { connectionString, ssl: { rejectUnauthorized: false } }
    : {
        user: process.env.DB_USER || "postgres",
        host: process.env.DB_HOST || "localhost",
        database: process.env.DB_NAME || "marine_db",
        password: process.env.DB_PASSWORD || "Manisha36180",
        port: parseInt(process.env.DB_PORT || "5432"),
        connectionTimeoutMillis: 5000, // 5 second timeout
      }
);

// Helper to check if DB is available
export async function isDbConnected() {
  // In production, if no connection string is provided, don't even try localhost
  if (isProduction && !connectionString) {
    return false;
  }

  try {
    const client = await pool.connect();
    client.release();
    return true;
  } catch (err) {
    console.error("Database connection failed:", err);
    return false;
  }
}
