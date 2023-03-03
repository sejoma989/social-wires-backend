import dotenv from "dotenv";

dotenv.config();

export const host = process.env.DB_HOST || "localhost";
export const port = process.env.DB_PORT || "localhost";
export const database = process.env.DB_DEFAULT_NAME || "localhost";
export const username = process.env.DB_DEFAULT_USER || "localhost";
export const password = process.env.DB_DEFAULT_PASSWORD || "localhost";

