import { Pool } from "pg";

const isProduction = process.env.NODE_ENV === "production";
const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

// Only instantiate pool if we have a connection string or are in dev
export const pool = new Pool(
  connectionString 
    ? { connectionString, ssl: { rejectUnauthorized: false } }
    : {
        user: process.env.DB_USER || "postgres",
        host: process.env.DB_HOST || "localhost",
        database: process.env.DB_NAME || "marine_db",
        password: process.env.DB_PASSWORD || "Manisha36180",
        port: parseInt(process.env.DB_PORT || "5432"),
        connectionTimeoutMillis: 2000,
      }
);

// Helper to check if DB is available - Force FALSE in production if no connection string
export async function isDbConnected() {
  if (isProduction && !connectionString) {
    console.log("Production: No database connection string found. Using scraper fallback.");
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
