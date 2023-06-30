import repositoryConnection from "../repository/repository"

async function getList() {
    const list = await repositoryConnection.getList()
    return list.rows
}

async function postList(telefone: string, nome: string, serviço: string) {
    return await repositoryConnection.postList(telefone, nome, serviço)
}

async function putList(id: number, telefone: string, nome: string, serviço: string) {
    return await repositoryConnection.putList(id, telefone, nome, serviço)
}

async function deleteList(id: number) {
    return await repositoryConnection.deleteList(id)
}

const service = {
    getList,
    postList,
    putList, 
    deleteList
}

export default service