import Joi from "joi";


export const postSchema = Joi.object({
    nome: Joi.string().required(),
    ap: Joi.string().required(),
    email: Joi.string().email().required(),
    senha: Joi.string().min(6).required()
})

export const putSchema = Joi.object({
    id: Joi.number().required(),
    nome: Joi.string().required(),
    ap: Joi.string().required(),
    email: Joi.string().email().required(),
    senha: Joi.string().min(6).required()
})

export const deleteSchema = Joi.object({
    id: Joi.number().required()
})