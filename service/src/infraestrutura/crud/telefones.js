const executaQuery = require("../database/queries");

class Telefone {

    adiciona(entidade) {
        const {dd, numero, tipo, pessoasId} = entidade
        const sql = `INSERT INTO Telefones (DD, Numero, Tipo, PessoasId) VALUES ('${dd}', '${numero}', '${tipo}', ${pessoasId})`
        return executaQuery(sql).then(resposta => ({
            id: resposta.insertId,
            dd,
            numero, 
            tipo,
            pessoasId
        }))
    }

    alterar(entidade) {
        const {id, dd, numero, tipo, pessoasId} = entidade
        const sql = `UPDATE Telefones SET DD = '${dd}', Numero = '${numero}', Tipo = '${tipo}', PessoasId = ${pessoasId} WHERE Id = ${id}`
        return executaQuery(sql).then(() => entidade)

    }

    buscarTodos() {
        const sql = `SELECT Id, DD, Numero, Tipo, PessoasId FROM Telefones`
        return executaQuery(sql)
    }

    buscarPorId(id) {
        const sql = `SELECT Id, DD, Numero, Tipo, PessoasId FROM Telefones WHERE id=${id}`
        return executaQuery(sql).then(resposta => resposta[0])

    }

    excluir(id) {
        const sql = `DELETE FROM Telefones WHERE id= ${id}`
        return executaQuery(sql).then(() => id)
    }
}

module.exports = new Telefone