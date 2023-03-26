import { clientsSchema } from '../schemas/clientsSchema.js'

export async function validSchemaClients(req, res, next) {
    const clients = req.body
    const { error } = clientsSchema.validate(clients)

    if (error) {

        const errors = error.details.map((detail) => detail.message)
        return res.status(400).send({ errors })
    }

    res.locals.clients = clients

    next()
}