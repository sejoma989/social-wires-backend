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