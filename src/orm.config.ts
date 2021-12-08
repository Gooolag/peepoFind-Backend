import { createConnection } from "typeorm";
import { User } from "./entities/User";
import { DB_PASS } from "../secrets.json";

export default {
  type: "postgres",
  database: "pnfDB",
  synchronize: true,
  logging: true,
  username: "postgres",
  password: DB_PASS,
  entities: [User],
} as Parameters<typeof createConnection>[0];
