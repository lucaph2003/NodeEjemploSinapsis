import { Router } from "express";
import {getUsers , getUserById, postUser} from '../controllers/usuarios.controllers.js'

const router = Router();
router.get('/usuarios',getUsers);
router.post('/usuarios',postUser);
router.get('/usuarios/:id',getUserById);

export default router;