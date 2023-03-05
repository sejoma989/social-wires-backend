import { Request, Response } from "express";
import { Op } from "sequelize";
import Mensaje from "../models/message";
import Usuario from "../models/user";


interface MyUserRequest extends Request {
    usuario?: any;
}

// POST route createMessage
export const createMessage = async ( req:Request, res:Response ) => {

    const { body } = req;

    try {

        const mensaje = Mensaje.build( body );
        await mensaje.save();
         

        res.json( mensaje );
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Hable con el administrador'
        })
    }



}

// GET route getAllMessages
export const getAllMessages = async ( req:Request, res:Response ) => {

    const mensajes = await Mensaje.findAll();

    res.json({
        mensajes
    })

}

// GET route getMyMessages
export const getMyMessages = async ( req:MyUserRequest, res:Response ) => {

    const usuarioAutenticado = String(req.usuario.id);

    const mensajes = await Mensaje.findAll({ 
        where: { user: usuarioAutenticado }
    });


    res.json({
        mensajes,
        usuarioAutenticado,

    })

}

// GET route getMessageById
export const getMessageById = async ( req:Request, res:Response ) => {

    const { id } = req.params;


    const mensaje = await Mensaje.findByPk( id );

    if ( !mensaje ) {
        return res.status(404).json({
            msg: `No existe un mensaje con el id ${ id }`
        });
    }
    
    res.json(mensaje)

}

// DELETE route deleteMessage
export const deleteMessage = async ( req:Request, res:Response ) => {

    const { id } = req.params;

    const mensaje = await Mensaje.findByPk( id );

    if ( !mensaje ) {
        return res.status(404).json({
            msg: `No existe un mensaje con el id ${ id }`
        });
    }

    await mensaje.destroy();

    res.json({ 
        delete: true, 
        status: "OK",
        mensaje 
    })

}

// PATCH route createReaction
export const createReaction = ( req:Request, res:Response ) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg:'Create a Reaction by id',
        body,
        id
    })

}

// PATCH route createReaction
export const createComment = ( req:Request, res:Response ) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg:'Create a Comment by id',
        body,
        id
    })

}