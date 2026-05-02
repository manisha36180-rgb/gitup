import { pool, isDbConnected } from "../../lib/db";
import { scrapeVessels } from "../../lib/scraper";

export async function GET() {
  try {
    const dbActive = await isDbConnected();
    if (dbActive) {
      const { rows } = await pool.query('SELECT * FROM "Vessel" ORDER BY id');
      if (rows.length > 0) return Response.json(rows);
    }
    
    // Fallback
    const vessels = await scrapeVessels();
    return Response.json(vessels);
  } catch (err) {
    console.error("API error:", err);
    return Response.json({ error: "Failed to fetch vessels" }, { status: 500 });
  }
}