import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('usuario', {
    username: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    fullname: {
        type: DataTypes.STRING,
    },
});


export default Usuario;

