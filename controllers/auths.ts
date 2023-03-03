import { Request, Response } from "express";
import { generateJWT } from "../helpers/generate-jwt";
import Usuario from "../models/user";
import { v4 as uuidv4 } from 'uuid';


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
                msg: 'El correo ya esta registrado ' + body.email
            })
        }


        const nombreTemp = uuidv4();
        const usuario = Usuario.build( body );
        await usuario.save();

        res.json({ 
            usuario
         });

    } catch (error) {
        res.status(500).json({
            msg:'Hable con el administrador '
        })
    }


}

// signin route auth
export const signIn = async ( req:Request, res:Response ) => {

    const { username, password } = req.body;
    // const { body } = req;

    try {

        // verificar que username existe
        const usuario = await Usuario.findOne({ where: {username } });
        if ( !usuario ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - username'
            });
        }

        // verificar que el password sea correcto
        const validPassword = usuario.getDataValue('password');
        if ( password !== validPassword ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }

        // generar el JWT
        const token = await generateJWT( usuario.getDataValue('id') );

        res.json({
            access_token:token,
            expires_in: '4h',
            message: "Successfully logged in",
            status: true
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Hable con el administrador'
        })
    }


}



export const getUsuarios = async ( req:Request, res:Response ) => {

    const usuarios = await Usuario.findAll();
    
    res.json( { usuarios } );
        
}
