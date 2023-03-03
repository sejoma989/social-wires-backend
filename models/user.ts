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
        get() {
            return () => this.getDataValue('password');
        },
    },
    fullname: {
        type: DataTypes.STRING,
    },
});

Usuario.prototype.toJSON =  function () {
       let values = Object.assign({}, this.get());   
       delete values.password, delete values.createdAt, delete values.updatedAt;   
       return values; 
    }


export default Usuario;

