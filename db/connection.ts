import { Sequelize } from 'sequelize';

const db = new Sequelize(
    'wires-node', 'root', 'root', {
        host: 'localhost',
        dialect: 'postgres',
    } );

export default db;