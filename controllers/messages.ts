import { Request, Response } from "express";
import { Op } from "sequelize";
import Comentario from "../models/comment";
import Mensaje from "../models/message";
import Usuario from "../models/user";


interface MyUserRequest extends Request {
    usuario?: any;
}

// POST route createMessage
export const createMessage = async ( req:MyUserRequest, res:Response ) => {

    const { body } = req;
    const usuarioAutenticado = String(req.usuario.id);

    body.user = usuarioAutenticado;


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
export const deleteMessage = async ( req:MyUserRequest, res:Response ) => {

    const { id } = req.params;

    const mensaje = await Mensaje.findByPk( id );

    if ( !mensaje ) {
        return res.status(404).json({
            msg: `No existe un mensaje con el id ${ id }`
        });
    }

    const usuarioMensaje = String(mensaje.dataValues.user);
    const usuarioAutenticado = String(req.usuario.id);


    if ( usuarioMensaje !== usuarioAutenticado ) {
        return res.status(401).json({
            msg: `Solo puede eliminar mensajes de propia autoria`
        });
    }

    await mensaje.destroy();

    res.json({ 
        delete: true, 
        status: "OK",
        // mensaje 
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
export const createComment = async ( req:MyUserRequest, res:Response ) => {

    const { id } = req.params;
    const { body } = req;


    try {

    
        const mensaje = await Mensaje.findByPk( id );
        
        if ( !mensaje ) {
            return res.status(404).json({
                msg: `No existe un mensaje con el id ${ id }`
            });
        }

        console.log(body);
        const usuarioAutenticado = String(req.usuario.id);

        body.author = usuarioAutenticado;
        body.messageId = id;


        const comentario = Comentario.build( body );
        await comentario.save();

        res.json( {mensaje, comentario } );



    

        // const mensajeActualizado = Mensaje.build( body );
        // await mensaje.save();
         

        // res.json( mensaje );
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Hable con el administrador'
        })
    }


    // res.json({
    //     msg:'Create a Comment by id',
    //     body,
    //     id
    // })

}