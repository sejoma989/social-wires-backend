import Mensaje from "../models/message";
import Usuario from "../models/user";

export const existEmail = async ( email:string ) => {
    
    const existeEmail = await Usuario.findOne({
            where: {
                email
            }
        });
    
        if (existeEmail) {
            throw new Error(`El correo ya esta registrado ${ email }`);
        }
    
    }

export const existMessageById = async ( id:string ) => {
        
        const existMessage = await Mensaje.findByPk( id );
        
        if ( !existMessage ) {
            throw new Error(`No existe mensaje con id ${ id }`);
        }
        
    }