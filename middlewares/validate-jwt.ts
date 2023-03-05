import {Response, Request} from  'express';
import jwt from 'jsonwebtoken';
import Usuario from '../models/user';

interface MyUserRequest extends Request {

    usuario?: any;
}

export const validateJWT = async (req:MyUserRequest, res:Response, next: () => void) => {

    const token = req.header('bearer-token-autorization');

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {

        // const payload = jwt.verify( token, process.env.SECRETORPRIVATEKEY || '' );
        const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY || '' ) as any;
        const usuario = await Usuario.findByPk( uid );

        if ( !usuario ) {
            return res.status(401).json({
                msg: 'Token no valido - usuario no existe en DB'
            })
        }

        req.usuario = usuario.dataValues;

        // console.log(req.usuario);


        next();

        
    } catch (error) {
        
        console.log(error);
        return res.status(401).json({
            msg: 'Token no valido'
        })
    }

}

