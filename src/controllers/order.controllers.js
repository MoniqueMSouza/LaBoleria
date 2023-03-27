import { db } from '../database/database.js'

export async function createOrder(req, res){

const {clientId, cakeId, quantity, totalPrice} = res.locals.orders

try{

    await db.query(`
    INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice") 
    VALUES ($1, $2, $3, $4);
    `, [clientId, cakeId, quantity, totalPrice])


res.sendStatus(201)
}catch(err){
    res.status(500).send(err.message)
}
}