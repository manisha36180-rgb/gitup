import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "marine_db",
  password: "Manisha36180",
  port: 5432,
});
