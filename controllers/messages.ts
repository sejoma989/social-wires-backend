import { Request, Response } from "express";

// POST route createMessage
export const createMessage = ( req:Request, res:Response ) => {

    const { body } = req;

    res.json({
        msg:'Create message',
        body
    })

}

// GET route getAllMessages
export const getAllMessages = ( req:Request, res:Response ) => {

    res.json({
        msg:'Get All Messages',
    })

}

// GET route getMyMessages
export const getMyMessages = ( req:Request, res:Response ) => {

    res.json({
        msg:'Get All My Messages',
    })

}

// GET route getMessageById
export const getMessageById = ( req:Request, res:Response ) => {

    const { id } = req.params;

    res.json({
        msg:'Get a Message by id',
        id
    })

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