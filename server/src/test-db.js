import "dotenv/config";
import pg from "pg";

const { Client } = pg;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

try {
  await client.connect();

  const result = await client.query(
    "SELECT current_database(), current_user;"
  );

  console.log("Database connection successful:");
  console.log(result.rows[0]);
} catch (error) {
  console.error("Database connection failed:");
  console.error(error.message);
  process.exitCode = 1;
} finally {
  await client.end().catch(() => {});
}
