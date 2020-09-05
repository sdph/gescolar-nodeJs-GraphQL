const executaQuery = require("../database/queries");

class Sala {
    adiciona(entidade) {
        const {identificador, descricao, dataCadastro, tipoDeSala, capacidade, instituicaoId} = entidade
        const sql = `INSERT INTO Salas (Identificador, Descricao, DataCadastro, TipoDeSala, Capacidade, InstituicaoId)  VALUES ('${identificador}', '${descricao}', '${dataCadastro}', '${tipoDeSala}', '${capacidade}', ${instituicaoId})`
        return executaQuery(sql).then(resposta => ({
            id: resposta.insertId,
            identificador,
            descricao,
            dataCadastro,
            tipoDeSala,
            capacidade,
            instituicaoId
        }))
    }

    alterar(entidade) {
        const {id, identificador, descricao, dataCadastro, tipoDeSala, capacidade, instituicaoId} = entidade
        const sql = `UPDATE Salas SET  Identificador = '${identificador}', Descricao = '${descricao}', DataCadastro = '${dataCadastro}', TipoDeSala = '${tipoDeSala}', Capacidade = '${capacidade}', InstituicaoId = ${instituicaoId} WHERE id = ${id}`
    }
    buscarTodos() {
        const sql = `SELECT Id, Identificador, Descricao, DataCadastro, TipoDeSala, Capacidade, InstituicaoId FROM Salas`
        return executaQuery(sql)
    }
    buscarPorId(id) {
        const sql = `SELECT Id, Identificador, Descricao, DataCadastro, TipoDeSala, Capacidade, InstituicaoId FROM Salas WHERE Id = ${id}`
        return executaQuery(sql).then(resposta => resposta[0])
    }
    excluir(id) {
        const sql = `DELETE FROM Salas WHERE Id = ${id}`
        return executaQuery(sql).then(() => id)
    }

}

module.exports = new Sala