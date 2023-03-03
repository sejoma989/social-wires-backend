import { Request, Response } from "express";
import Usuario from "../models/usuario";


// signup route postUsuario
export const signUp = async ( req:Request, res:Response ) => {

    const { body } = req;

    
    try {

        // Verificar si el email existe
        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if (existeEmail) {
            return res.status(400).json({
                msg: 'El correo ya esta registrado' + body.email
            })
        }


        const usuario = new Usuario( body );
        await usuario.save();

        res.json({ 
            usuario
         });

    } catch (error) {
        res.status(500).json({
            msg:'Hable con el administrador'
        })
    }


}

// signin route auth
export const signIn = ( req:Request, res:Response ) => {

    const { body } = req;

    res.json({
        msg:'signIn',
        body
    })

}

export const getUsuarios = async ( req:Request, res:Response ) => {

    const usuarios = await Usuario.findAll();
    
    res.json( { usuarios } );
        
}
