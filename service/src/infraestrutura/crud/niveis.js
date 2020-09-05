const executaQuery = require("../database/queries");

class Nivel {

    adiciona(entidade) {
        const {descricao, dataCadastro} = entidade
        const sql = `INSERT INTO Nivel (Descricao, DataCadastro) VALUES ('${descricao}', '${dataCadastro}') `
        return executaQuery(sql).then(resposta => ({
            id: resposta.insertId,
            descricao,
            dataCadastro
        }))


    }

    alterar(entidade) {
        const {id, descricao, dataCadastro} = entidade
        const sql = `UPDATE Nivel SET Descricao = '${descricao}', DataCadastro = '${dataCadastro}' WHERE Id = ${id}`
        return executaQuery(sql).then(() => entidade)
    }

    buscarTodos() {
        const sql = `SELECT Descricao, DataCadastro FROM Nivel`
        return executaQuery(sql)

    }
    buscarPorId(id) {
        const sql = `SELECT Descricao, DataCadastro FROM Nivel WHERE id=${id}`
        return executaQuery(sql).then(resposta => resposta[0])
    }
    excluir(id) {
        const sql = `DELETE FROM Nivel WHERE id=${id}`
        return executaQuery(sql).then(() => id)
    }
}

module.exports = new Nivel