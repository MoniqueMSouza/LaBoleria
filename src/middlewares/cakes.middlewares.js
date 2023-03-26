import { cakesSchema } from '../schemas/cakesSchema.js'
import { db } from '../database/database.js'

export async function validSchemaCakes(req, res, next) {
    const cake = req.body

    /*     
    const validação = cakesSchema.validade(cake)
    
    como sei que se der errado virá dentro de uma 
    chave error, o erro, posso desestruturar: 
    */
    const { error } = cakesSchema.validate(cake)

    if (error) {
        /*
        Verifica se a image não é vazia  
        */
        if (!cake.image) {
            return res.status(422).send(error.message);
        }
        /* 
        Se existir um erro, essa função retornará o status 400
        e através de um map, trará também uma lista com os erros.
        */
        const errors = error.details.map((detail) => detail.message)
        return res.status(400).send({ errors })
    }

    /*
    Verifica se existe algum bolo com o mesmo "name".
    */
    const cakeExists = await db.query('SELECT * FROM cakes WHERE name = $1', [cake.name])

    /*
    Se existir, retorna o status de conflito: 409
    */
    if (cakeExists.rowCount != 0) return res.sendStatus(409)
    /*
    Aqui, garanto que as informações que vão para 
    o controlador são as informações que eu já verifiquei
    */
    res.locals.cake = cake

    next()
}