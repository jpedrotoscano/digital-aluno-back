const mysql = require("mysql2/promise");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
    log: ["query"]
});

async function executarSQL(sql){
    const conexao = await prisma.createConnection();

    const [ result ] = await conexao.query(sql);

    conexao.end();

    return result;
}

module.exports = {
    executarSQL,
    prisma
}