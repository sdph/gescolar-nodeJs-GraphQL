const executaQuery = require("../database/queries");
class Serie {
    adiciona(entidade) {
        const {identificador, descricao, dataCadastro, nivelId} = entidade
        const sql = `INSERT INTO Series (Identificador, Descricao, DataCadastro, NivelId) VALUES ('${identificador}', '${descricao}', '${dataCadastro}', ${nivelId})`
        return executaQuery(sql).then(resposta => ({
            id: resposta.insertId,
            identificador,
            descricao,
            dataCadastro,
            nivelId
        }))
    }

    alterar(entidade) {
        const {id, identificador, descricao, dataCadastro, nivelId} = entidade
        const sql = `UPDATE Series SET Identificador = '${identificador}', Descricao = '${descricao}', DataCadastro = '${dataCadastro}', NivelId = ${nivelId} WHERE id = ${id}`
        return executaQuery(sql).then(() => entidade)
    }
    
    buscarTodos() {
        const sql = `SELECT Id, Identificador, Descricao, DataCadastro, NivelId FROM Series`
        return executaQuery(sql)
    }

    buscarPorId(id) {
        const sql = `SELECT Id, Identificador, Descricao, DataCadastro, NivelId FROM Series WHERE Id = ${id}`
        return executaQuery(sql).then(resposta => resposta[0])
    }

    excluir(id) {
        const sql = `DELETE FROM Series WHERE Id = ${id}`
        return executaQuery(sql).then(() => id)
    }

}

module.exports = new Serie