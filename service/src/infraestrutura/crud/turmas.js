const executaQuery = require("../database/queries");

class Turma {

    adiciona(entidade) {
        const {descricao, identificador, dataCadastro, turnoId} = entidade
        const sql = `INSERT INTO Turma (Descricao, Identificador, DataCadastro, TurnoId)  VALUES ('${descricao}', '${identificador}', '${dataCadastro}', ${turnoId})`
        return executaQuery(sql).then(resposta => ({
            id: resposta.insertId,
            descricao,
            identificador,
            dataCadastro, 
            turnoId
        }))
    }

    alterar(entidade) {
        const {id, descricao, identificador, dataCadastro, turnoId} = entidade
        const sql = `UPDATE Turma SET  Descricao = '${descricao}' ,Identificador = '${identificador}' ,DataCadastro = '${dataCadastro}' ,TurnoId = ${turnoId} WHERE Id = ${id}`
        return executaQuery(sql).then(() => entidade)
    }

    buscarTodos() {
        const sql = `SELECT Id, Descricao, Identificador, DataCadastro, TurnoId FROM Turma`
        return executaQuery(sql)
    }
    buscarPorId(id) {
        const sql = `SELECT Id, Descricao, Identificador, DataCadastro, TurnoId FROM Turma WHERE id=${id}`
        return executaQuery(sql).then(resposta => resposta[0])
    }
    excluir(id) {
        const sql = `DELETE FROM Turma WHERE id=${id}`
        return executaQuery(sql).then(() => id)
    }
}

module.exports = new Turma