import { Router } from "express";
import { createMessage, getAllMessages, getMyMessages, getMessageById, deleteMessage, createReaction, createComment } from '../controllers/messages';
import { validateFields } from "../middlewares/validate-fields";
import { validateJWT } from "../middlewares/validate-jwt";
import { existMessageById } from '../helpers/db-validators';
import { check } from 'express-validator';


const router = Router();

router.post('/', [
    validateJWT,
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('text', 'El texto es obligatorio').not().isEmpty(),
    validateFields
],createMessage);
router.get('/',  [
    validateJWT,
    validateFields
],getAllMessages);
router.get('/me', [
    validateJWT,
    validateFields
],getMyMessages);
router.get('/me/:id', [
    validateJWT,
    validateFields
], getMessageById);
router.delete('/:id', [
    validateJWT,
    check('id', 'Ingrese el ID del mensaje').not().isEmpty(),
    check('id').custom( existMessageById ),
    validateFields
],deleteMessage);
router.patch('/reaction/:id', [
    validateJWT,
    validateFields
],createReaction);
router.patch('/comment/:id', [
    validateJWT,
    validateFields
],createComment);



export default router;