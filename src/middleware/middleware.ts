import { NextFunction, Response, Request } from "express"
import { Erro } from "../config/protocols"
import Joi from "joi"

export function errorHandler(err: Erro, req: Request, res: Response, next: NextFunction) {
    if(err) return res.send(err.detail)
}

export function validationMiddleware(schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body, {abortEarly: false})

        if(validation.error) {
            const errors = validation.error.details.map(err=>err.message)
            return res.send(errors)
        }
        next()
    }

}