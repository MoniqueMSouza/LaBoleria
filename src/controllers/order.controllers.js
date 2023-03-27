import { db } from '../database/database.js'

export async function createOrder(req, res) {

    const { clientId, cakeId, quantity, totalPrice } = res.locals.orders

    try {

        await db.query(`
    INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice") 
    VALUES ($1, $2, $3, $4);
    `, [clientId, cakeId, quantity, totalPrice])


        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getOrders(req, res) {
    let date = ""
    let infos = ""

    if (req.query.date) {
        date = req.query.date
    }

    try {
        if (!date) {
            infos = await db.query(`SELECT orders.*, cakes.*, clients.*,
            orders.id AS id_order,cakes.id AS id_cake, clients.id AS id_clients, cakes.name AS cake_name, clients.name AS client_name 
            FROM orders
            JOIN cakes ON orders."cakeId" = cakes.id
            JOIN clients ON orders."clientId" = clients.id`)
        } else {
            infos = await db.query(`SELECT orders.*, cakes.*, clients.*,
            orders.id AS id_order,cakes.id AS id_cake, clients.id AS id_clients, cakes.name AS cake_name, clients.name AS client_name 
            FROM orders
            JOIN cakes on orders."cakeId" = cakes.id
            JOIN clients on orders."clientId" = clients.id where "createdAt"::date = $1`, [date])
        }

        if (infos.rowCount == 0) return res.sendStatus(404) 

        const resposta = infos.rows.map((row) => ({
            client: {
                id: row.clientId,
                name: row.client_name,
                address: row.address,
                phone: row.phone,
            },
            cake: {
                id: row.cakeId,
                name: row.cake_name,
                price: row.price,
                description: row.description,
                image: row.image,
            },
            orderId: row.id_order,
            createdAt: row.createdAt,
            quantity: row.quantity,
            totalPrice: row.totalPrice,
        }));

        res.status(200).send(resposta)
    } catch (err) {
        res.status(500).send(err.message)

    }

}

export async function getById(req, res) {
try{
    const orderId = Number(req.params.id);

    const infos = await db.query(`SELECT orders.*, cakes.*, clients.*,
    orders.id AS id_order,orders."createdAt" AS created_at, cakes.id AS id_cake, clients.id AS id_clients, cakes.name AS cake_name, clients.name AS client_name 
    FROM orders
    JOIN cakes on orders."cakeId" = cakes.id
    JOIN clients on orders."clientId" = clients.id
    WHERE orders.id=$1`,[orderId])

    if (infos.rowCount == 0) return res.sendStatus(404) 

     const resposta = infos.rows.map((row) => ({
        client: {
          id: row.clientId,
          name: row.client_name,
          address: row.address,
          phone: row.phone,
        },
        cake: {
          id: row.cakeId,
          name: row.cake_name,
          price: row.price,
          description: row.description,
          image: row.image,
        },
        orderId: row.id_order,
        createdAt: row.created_at,
        quantity: row.quantity,
        totalPrice: row.totalPrice,
      }));

    
    res.status(200).send(resposta);
}catch(err){
    console.log(err);
    res.status(500).send(err.message);
}

}