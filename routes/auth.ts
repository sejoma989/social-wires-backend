import { Router } from "express";
import { check } from "express-validator";
import { signIn, signUp, getUsuarios } from '../controllers/auths';
import { existEmail } from "../helpers/db-validators";
import { validateFields } from '../middlewares/validate-fields';

const router = Router();

router.post('/signup', [
    check('username', 'El username es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener 6 letras').isLength({ min: 6 }),
    check('email', 'El email no es valido').isEmail(),
    check('email').custom( existEmail ),
    check('fullname', 'El nombre completo es obligatorio').not().isEmpty(),
    validateFields
] , signUp );
router.post('/signin',  signIn);
router.get('/',  getUsuarios);



export default router;