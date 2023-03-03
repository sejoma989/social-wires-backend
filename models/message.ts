import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Mensaje = db.define('mensaje', {
    user: {
        type: DataTypes.STRING,
    },
    title: {
        type: DataTypes.STRING,
    },
    text: {
        type: DataTypes.STRING,
    },
    },
    {
        tableName: "mensajes",
    }
);

Mensaje.prototype.toJSON =  function () {
       let values = Object.assign({}, this.get());   
       delete values.updatedAt;   
       return values; 
    }


export default Mensaje;