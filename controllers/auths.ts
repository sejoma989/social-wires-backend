import { Request, Response } from "express";



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
