const executaQuery = require("../database/queries");

class Turno {

    adiciona(entidade) {
        const {descricao, dataCadastro} = entidade        
        const sql = `INSERT INTO Turno (Descricao, DataCadastro) VALUES ('${descricao}', '${dataCadastro}')`
        return executaQuery(sql).then(resposta => ({
            id: resposta.insertId,
            descricao,
            dataCadastro
        }))

    }

    alterar(entidade) {
        const {id, descricao, dataCadastro} = entidade
        const sql = `UPDATE Turno SET Descricao = '${descricao}', DataCadastro = '${dataCadastro}' WHERE Id = ${id}`
        return executaQuery(sql).then(() => entidade)

    }

    buscarTodos() {
        const sql = 'SELECT Id, Descricao, DataCadastro FROM Turno'
        return executaQuery(sql)

    }
    buscarPorId(id) {
        const sql = `SELECT Id, Descricao, DataCadastro FROM Turno WHERE id=${id}`
        return executaQuery(sql).then(resposta => resposta[0])

    }
    excluir(id) {
        const sql = `DELETE FROM Turno WHERE id=${id}`
        return executaQuery(sql).then(() => id)

    }
}

module.exports = new Turno