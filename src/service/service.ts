import repository from "../repository/repository"
import { Moradores } from "@prisma/client"

export type MoradoresCreate = Omit<Moradores, "id">
export type MoradoresUpdate = Omit<Moradores, "unknown">
export type MoradoresId = Omit<Moradores, "nome" | "ap" | "email" | "senha">

async function getList() {
    return await repository.getList()
}

async function postList(body: MoradoresCreate) {
    return await repository.postList(body)
}

async function putList(body: MoradoresUpdate) {
    return await repository.putList(body)
}

async function deleteList(body: MoradoresId) {
    return await repository.deleteList(body)
}

const service = {
    getList,
    postList,
    putList, 
    deleteList
}

export default service