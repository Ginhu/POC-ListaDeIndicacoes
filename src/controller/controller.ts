import httpStatus from "http-status"
import service from "../service/service"
import { Request, Response } from "express"
import { Contato } from "../config/protocols"

async function getList(req: Request, res: Response ) {
    const list = await service.getList()

    res.status(httpStatus.OK).send(list)
}

async function postList(req: Request, res: Response) {
    
    await service.postList(req.body)

    res.status(httpStatus.CREATED).send('Contato criado com sucesso')
}

async function putList(req: Request, res: Response) {
    await service.putList(req.body)

    res.status(httpStatus.OK).send('Contato atualizado com sucesso')
}

async function deleteList(req: Request, res: Response) {
    await service.deleteList(req.body)

    res.status(httpStatus.OK).send('Contato deletado com sucesso')
}

const controller = {
    getList, 
    postList, 
    putList,
    deleteList
}

export default controller