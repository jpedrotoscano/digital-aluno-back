const { executarSQL } = require("../database");

async function listarVagas(){
    try {
        return await executarSQL(`SELECT * FROM vagas;`);
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}
async function listarVaga(id){
    try {
        return await executarSQL(`SELECT * FROM vagas WHERE vaga_id = ${id};`);
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}
async function criarVaga(dados){
    return "criarVaga";
}
async function editarVaga(id, dados){
    return "editarVaga";
}
async function deletarVaga(id){
    return "deletarVaga";
}

module.exports = {
    listarVagas,
    listarVaga,
    criarVaga,
    editarVaga,
    deletarVaga
}