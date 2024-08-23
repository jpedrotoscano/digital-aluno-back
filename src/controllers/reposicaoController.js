const { prisma } = require("../database")

async function criarReposicao(dados) {
    try {
        return await prisma.reposicao.create({
            data: dados
        })
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

async function listarReposicoes() {
    try {
        return await prisma.reposicao.findMany()
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

async function listarReposicao(id) {
    try {
        return await prisma.reposicao.findUnique({
            where: {
                reposicao_id: Number(id)
            }
        })
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

async function editarReposicao(id, dados) {
    try {
        return await prisma.reposicao.update({
            where: {
                reposicao_id: Number(id)
            },
            data: dados
        })
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

async function deletarReposicao(id) {
    try {
        return await prisma.reposicao.delete({
            where: {
                reposicao_id: Number(id)
            }
        })
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

module.exports = {
    criarReposicao,
    listarReposicoes,
    listarReposicao,
    editarReposicao,
    deletarReposicao
}