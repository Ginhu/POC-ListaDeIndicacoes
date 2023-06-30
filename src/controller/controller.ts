import httpStatus from "http-status"
import service from "../service/service"
import { Request, Response } from "express"
import { Contato } from "../config/protocols"

type ContatoGet = Omit<Contato, "id">

async function getList(req: Request, res: Response ) {
    const list = await service.getList() as Contato[]

    res.status(httpStatus.OK).send(list)
}

async function postList(req: Request, res: Response) {
    const {telefone, nome, serviço} = req.body as ContatoGet
    await service.postList(telefone, nome, serviço)

    res.status(httpStatus.CREATED).send('Contato criado com sucesso')
}

async function putList(req: Request, res: Response) {
    const {id, telefone, nome, serviço} = req.body as Contato
    await service.putList(id, telefone, nome, serviço)

    res.status(httpStatus.OK).send('Contato atualizado com sucesso')
}

async function deleteList(req: Request, res: Response) {
    const {id} = req.body

    await service.deleteList(id)

    res.status(httpStatus.OK).send('Contato deletado com sucesso')
}

const controller = {
    getList, 
    postList, 
    putList,
    deleteList
}

export default controller