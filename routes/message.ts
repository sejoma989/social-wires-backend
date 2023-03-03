import { Router } from "express";
import { createMessage, getAllMessages, getMyMessages, getMessageById, deleteMessage, createReaction, createComment } from '../controllers/messages';

const router = Router();

router.post('/',                createMessage);
router.get('/',                 getAllMessages);
router.get('/me',               getMyMessages);
router.get('/me/:id',           getMessageById);
router.delete('/:id',           deleteMessage);
router.patch('/reaction/:id',   createReaction);
router.patch('/comment/:id',    createComment);



export default router;