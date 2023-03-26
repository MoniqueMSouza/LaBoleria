import { Router } from 'express';
import { validSchemaCakes } from '../middlewares/cakes.middlewares.js'
import { createCake } from '../controllers/cakes.controllers.js'


const router = Router();

router.post('/cakes', validSchemaCakes, createCake);

export default router;