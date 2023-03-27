import { Router } from 'express';
import { createOrder } from '../controllers/order.controllers.js';
import {validSchemaOrders} from '../middlewares/orders.middlewares.js'


const router = Router();

router.post('/order',validSchemaOrders, createOrder);
router.get('/order', () =>{});
router.get('/order/:id', ()=>{});

export default router;