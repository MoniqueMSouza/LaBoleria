import { db } from '../database/database.js'

export async function createCake (req, res){

const {name, price, image, description} = res.locals.cake

try{

    await db.query(`
    INSERT INTO cakes (name, price, image, description) 
    VALUES ($1, $2, $3, $4);
    `, [name, price, image, description])


res.sendStatus(201)
}catch(err){
    res.status(500).send(err.message)
}
}