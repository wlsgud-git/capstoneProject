import { pool } from "../config/db.config.js";

export async function dbPlay(query, info) {
  try {
    let data = await pool.query(query, info);
    return data.rows;
  } catch (err) {
    throw err;
  }
}
