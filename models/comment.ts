import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Mensaje from './message';

const Comentario = db.define('comentario', {
    messageId: {
        type: DataTypes.INTEGER,
        // primaryKey: true,
        // autoIncrement: true
    },
    comment: {
        type: DataTypes.STRING,
        allowNull:  false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    },
    {
        tableName: "comentarios",
    }

);



Comentario.prototype.toJSON =  function () {
       let values = Object.assign({}, this.get());   
       delete values.updatedAt, 
       delete values.createdAt, 
       delete values.updatedAt, 
       delete values.id, 
       delete values.messageId;   
       return values; 
    }


export default Comentario;