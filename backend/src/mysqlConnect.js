import mysql from "mysql2/promise";
import { config } from "./cfg.js";

export const connect = async () => {
  try {
    return await mysql.createConnection(config);
  } catch (err) {
    console.error("Connect error in backend/src/'database-mysql.js':", err);
  }
};
