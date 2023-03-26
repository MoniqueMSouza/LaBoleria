import { Router } from 'express';
import { validSchemaClients } from '../middlewares/clientes.middlewares.js';
import { createClients } from '../controllers/clientes.controllers.js';


const router = Router();

router.post('/clients',validSchemaClients ,createClients);
router.get('/clientes/:id/orders', ()=>{});

export default router;
