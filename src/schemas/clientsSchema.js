import joi from 'joi';

export const clientsSchema = joi.object({
    name: joi.string().required(),
    address: joi.string().required(),
    phone: joi.string().min(10).max(11).pattern(/^\d+$/).required()
    
  });