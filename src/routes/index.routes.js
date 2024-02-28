import { Router } from "express";

const router = Router();
router.get('/',(req,res) => res.send('Hola Sinapsis!!'));

export default router;