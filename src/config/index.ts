import dotenv from "dotenv";
import path from "node:path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  port: process.env.PORT,
  privateKey: process.env.PRIVATE_KEY,
  connection_str: process.env.CONNECTION_STR,
};

export default config;
