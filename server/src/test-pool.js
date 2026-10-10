import { pool } from "./db.js";

try {
  const result = await pool.query("SELECT current_database(), current_user;");
  console.log("NOVA database connected:");
  console.log(result.rows[0]);
} catch (error) {
  console.error("Database connection failed:");
  console.error(error.message);
} finally {
  await pool.end();
}
