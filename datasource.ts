import { DataSource } from "typeorm";
import { host, port, name, user, password } from './config';
import { User } from "./entities/User";

const defaultDatasource: DataSource = new DataSource({
    type: "postgres",
    host,
    port: +port,
    entities: [User],
    database: name,
    username: user,
    password
  });

export default defaultDatasource;