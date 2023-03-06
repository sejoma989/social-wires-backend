import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Usuario = db.define('usuario', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
            return () => this.getDataValue('password');
        },
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Usuario.prototype.toJSON =  function () {
       let values = Object.assign({}, this.get());   
       delete values.password, delete values.createdAt, delete values.updatedAt;   
       return values; 
    }


export default Usuario;

