
export type Contato = {
    id: number;
    telefone: string;
    nome: string;
    serviço: string
}

export type Erro = {
    "length": number;
    "name": string;
    "severity": string;
    "code": string;
    "detail": string;
    "schema": string;
    "table": string;
    "constraint": string;
    "file": string;
    "line": string;
    "routine": string;
}