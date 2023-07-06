import prisma from "../config/database"
import connection from "../config/database"
import { Contato } from "../config/protocols"
import { MoradoresCreate, MoradoresId, MoradoresUpdate } from "../service/service"

function getList() {
    return prisma.moradores.findMany()
}

function postList(body: MoradoresCreate) {
    const {nome, ap, email, senha} = body
    
    return prisma.moradores.create({
        data:{
            nome,
            ap,
            email,
            senha
        }
    })
}

 function putList(body: MoradoresUpdate) {
    const {id, nome, ap, email, senha} = body
    return prisma.moradores.update({
        data: {
            nome,
            ap,
            email,
            senha
        },
        where: {
            id: id
        }
    })
}

function deleteList(body: MoradoresId) {
    const {id} = body
    return prisma.moradores.delete({
        where: {
            id: id
        }
    })
}

const repository = {
    getList,
    postList,
    putList, 
    deleteList
}

export default repository