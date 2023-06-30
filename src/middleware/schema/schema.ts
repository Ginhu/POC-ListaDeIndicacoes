import Joi from "joi";


export const postSchema = Joi.object({
    telefone: Joi.string().min(10).max(13).required(),
    nome: Joi.string().required(),
    serviço: Joi.string().required()
})

export const putSchema = Joi.object({
    id: Joi.number().required(),
    telefone: Joi.string().min(10).max(13).required(),
    nome: Joi.string().required(),
    serviço: Joi.string().required()
})

export const deleteSchema = Joi.object({
    id: Joi.number().required()
})