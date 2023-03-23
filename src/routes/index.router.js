import { Router } from 'express';
import cakesRouter from './cakes.router.js';
import clientsRouter from './clientes.router.js';
import orderRouter from './order.router.js'

const router = Router();

router.use(cakesRouter);
router.use(clientsRouter);
router.use(orderRouter);

export default router;
