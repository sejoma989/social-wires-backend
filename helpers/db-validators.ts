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

    // const existeEmail = await Usuario.findOne({
    //     where: {
    //         email: body.email
    //     }
    // });

    // if (existeEmail) {
    //     return res.status(400).json({
    //         msg: 'El correo ya esta registrado ' + body.email
    //     })
    // }