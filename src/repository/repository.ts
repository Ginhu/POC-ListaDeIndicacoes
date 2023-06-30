import connection from "../config/database"
import { Contato } from "../config/protocols"

type PostContato = Omit<Contato, "id">

function getList() {
    return connection.query<Contato>(`SELECT * FROM list`)
}

function postList(telefone: string, nome: string, serviço: string) {
    return connection.query<PostContato>(`INSERT INTO list (telefone, nome, serviço) VALUES ($1, $2, $3)`, [telefone, nome, serviço])
}

function putList(id: number, telefone: string, nome: string, serviço: string) {
    return connection.query<PostContato>(`UPDATE list SET telefone=$1, nome=$2, serviço=$3 WHERE id=$4`, [telefone, nome, serviço, id])
}

function deleteList(id: number) {
    return connection.query(`DELETE FROM list WHERE id=$1`, [id])
}

const repositoryConnection = {
    getList,
    postList,
    putList, 
    deleteList
}

export default repositoryConnection