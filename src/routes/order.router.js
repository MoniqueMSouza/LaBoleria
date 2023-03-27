import { Router } from 'express';
import { createOrder } from '../controllers/order.controllers.js';
import {validSchemaOrders} from '../middlewares/orders.middlewares.js'
import { getOrders, getById } from '../controllers/order.controllers.js'


const router = Router();

router.post('/order',validSchemaOrders, createOrder);
router.get('/order',  getOrders);
router.get('/order/:id', getById);

export default router;