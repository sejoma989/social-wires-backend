import { Request, Response } from "express";
import Mensaje from "../models/message";

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
export const getMyMessages = ( req:Request, res:Response ) => {

    res.json({
        msg:'Get All My Messages',
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
export const deleteMessage = ( req:Request, res:Response ) => {

    const { id } = req.params;

    res.json({
        msg:'Delete a Message by id',
        id
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