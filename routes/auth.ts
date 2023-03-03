import { Router } from "express";
import { signIn, signUp, getUsuarios } from '../controllers/auths';

const router = Router();

router.post('/signup',  signUp );
router.post('/signin',  signIn);
router.get('/',  getUsuarios);



export default router;