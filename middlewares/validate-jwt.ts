import {Response, Request} from  'express';
import jwt from 'jsonwebtoken';

export const validateJWT = (req:Request, res:Response, next: () => void) => {

    const token = req.header('bearer-token-autorization');

    // console.log(token);

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {

        const payload = jwt.verify( token, process.env.SECRETORPRIVATEKEY || '' );

        next();

        
    } catch (error) {
        
        console.log(error);
        return res.status(401).json({
            msg: 'Token no valido'
        })
    }

}

