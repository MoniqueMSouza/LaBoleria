import { Router } from 'express';
import { createOrder } from '../controllers/order.controllers.js';
import {validSchemaOrders} from '../middlewares/orders.middlewares.js'
import { getOrders } from '../controllers/order.controllers.js'


const router = Router();

router.post('/order',validSchemaOrders, createOrder);
router.get('/order',  getOrders);
router.get('/order/:id', ()=>{});

export default router;