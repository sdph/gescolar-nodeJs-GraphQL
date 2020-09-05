const executaQuery = require("../database/queries");

class GradeCurricular {

    adiciona(entidade) {
        const {diciplinasId, anoLetivoId, seriesId} = entidade
        const sql = `INSERT INTO GradeCurricular (DiciplinasId, AnoLetivoId, SeriesId) VALUES (${diciplinasId}, ${anoLetivoId}, ${seriesId}) `
        return executaQuery(sql).then(resposta => ({
            id: resposta.insertId,
            diciplinasId,
            anoLetivoId,
            seriesId
        }))
    }

    alterar(entidade) {
        const {id, diciplinasId, anoLetivoId, seriesId} = entidade
        const sql = `UPDATE GradeCurricular SET DiciplinasId = ${diciplinasId}, AnoLetivoId = ${anoLetivoId}, SeriesId = ${seriesId} WHERE Id = ${id}`
        return executaQuery(sql).then(() => entidade)
    }

    buscarTodos() {
        const sql = `SELECT Id, DiciplinasId, AnoLetivoId, SeriesId FROM GradeCurricular`
        return executaQuery(sql)
    }

    buscarPorId(id) {
        const sql = `SELECT Id, DiciplinasId, AnoLetivoId, SeriesId FROM GradeCurricular WHERE id=${id}`
        return executaQuery(sql).then(resposta => resposta[0])

    }

    excluir(id) {
        const sql = `DELETE FROM GradeCurricular WHERE id=${id}`
        return executaQuery(sql).then(() => id)
    }
}

module.exports = new GradeCurricular