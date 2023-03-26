import { db } from '../database/database.js'

export async function createClients (req, res){

const {name, address, phone} = res.locals.clients

try{

    await db.query(`
    INSERT INTO clients (name, address, phone) 
    VALUES ($1, $2, $3);
    `, [name, address, phone])


res.sendStatus(201)
}catch(err){
    res.status(500).send(err.message)
}
}