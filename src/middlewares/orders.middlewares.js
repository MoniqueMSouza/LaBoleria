import { orderSchema } from '../schemas/orderSchema.js'
import { db } from '../database/database.js'

export async function validSchemaOrders(req, res, next) {

    const orders = req.body


    const clientsExists = await db.query('SELECT * FROM clients WHERE id = $1', [orders.clientId])   
    if (clientsExists.rowCount === 0) return res.status(404).send('Client não encontrado')

    const cakeExists = await db.query('SELECT * FROM cakes WHERE id = $1', [orders.cakeId])   
    if (cakeExists.rowCount === 0) return res.status(404).send('Cake não encontrado')

    const { error } = orderSchema.validate(orders)

    if (error) { 
              
        const errors = error.details.map((detail) => detail.message)
        return res.status(400).send({ errors })
    }

    const consultPrice = await db.query(`SELECT price FROM cakes WHERE id = $1`, [
        orders.cakeId,
      ]);

      const price = consultPrice.rows[0].price;
     
    res.locals.orders = { ...orders, price}

    next()
}