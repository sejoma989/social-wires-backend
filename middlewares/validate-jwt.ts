import {Response, Request} from  'express';
import jwt from 'jsonwebtoken';

export const validateJWT = (req:Request, res:Response, next: () => void) => {

    const token = req.header('bearer-token-autorization');

    console.log(token);

    next();

}

