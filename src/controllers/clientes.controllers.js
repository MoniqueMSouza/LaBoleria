import { db } from '../database/database.js'

export async function createClients(req, res) {

    const { name, address, phone } = res.locals.clients

    try {

        await db.query(`
    INSERT INTO clients (name, address, phone) 
    VALUES ($1, $2, $3);
    `, [name, address, phone])


        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}


export async function getClients(req, res) {
    const { id } = req.params


    try {
        const infos = await db.query(`SELECT orders.*, cakes.*, orders.id as id_order,cakes.id as id_cake,cakes.name as cake_name FROM orders
        join cakes on orders."cakeId" = cakes.id
        WHERE orders."clientId" = $1`,[id])
    
        if (infos.rowCount === 0) return res.sendStatus(404)

        const order = infos.rows.map((row) => ({
            orderId: row.id_order,
            quantity: row.quantity,
            createdAt: row.createdAt,
            totalPrice: row.totalPrice,
            cakeName: row.cake_name
          }));

        
        res.status(200).send(order);
    } catch (err) {
        res.status(500).send(err.message)
    }

}