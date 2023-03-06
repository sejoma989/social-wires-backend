import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Comentario from './comment';
import Usuario from './user';


const Mensaje = db.define('mensaje', {
    user: {
        type: DataTypes.STRING,
        references: {
            model: 'Usuario',
            key: 'id'
        },
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull:  false
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comments: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        references: {
            model: 'Comentario',
            key: 'messageId'
        },
        allowNull: true
    }
    },
    {
        tableName: "mensajes",
    }
);

Comentario.belongsTo(Mensaje , { foreignKey: 'messageId' });

Mensaje.hasMany(Comentario, { foreignKey: 'id' })

Mensaje.prototype.toJSON =  function () {
       let values = Object.assign({}, this.get());   
       values.comments = values.comments ? [values.comments] : [] ; 
       delete values.updatedAt;   
       return values; 
    }


export default Mensaje;