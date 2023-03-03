import { Request, Response } from "express";
import Usuario from "../models/usuario";


// signup route postUsuario
export const signUp = ( req:Request, res:Response ) => {

    const { body } = req;
    

    res.json({
        msg:'signUp',
        body
    })

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
