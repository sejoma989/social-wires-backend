import { DataSource } from "typeorm";
import { host, port, database, username, password } from './config';
import { User } from "./entities/User";

const defaultDatasource: DataSource = new DataSource({
    type: "postgres",
    host,
    port: +port,
    entities: [User],
    database,
    username,
    password
  });

export default defaultDatasource;