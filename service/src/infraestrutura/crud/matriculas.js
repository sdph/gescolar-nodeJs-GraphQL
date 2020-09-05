const executaQuery = require("../database/queries");

class Matricula {

    adiciona(entidade) {
        const {alunoId, anoLetivoId, descricao, salaId, seriesId, turmaId, gradeCurricularId} = entidade
        const sql = `INSERT INTO Matriculas (AlunoId, AnoLetivoId, Descricao, SalaId, SeriesId, TurmaId, GradeCurricularId)  VALUES (${alunoId}, ${anoLetivoId}, '${descricao}', ${salaId}, ${seriesId}, ${turmaId}, ${gradeCurricularId}) `
        return executaQuery(sql).then(() => entidade)

    }

    alterar(entidade) {
        const sql = `UPDATE Matriculas SET  Descricao = '${descricao}',  SalaId = ${salaId},  SeriesId = ${seriesId},  TurmaId = ${turmaId},  GradeCurricularId = ${gradeCurricularId}  WHERE AlunoId = ${id} AND AnoLetivoId = ${anoLetivoId}`
        return executaQuery(sql).then(() => entidade)
    }

    buscarTodos() {
        const sql = `SELECT AlunoId, AnoLetivoId, Descricao, SalaId, SeriesId, TurmaId, GradeCurricularId FROM Matriculas`
        return executaQuery(sql)
    }
    buscarPorId(alunoId, anoLetivoId) {
        const sql = `SELECT AlunoId, AnoLetivoId, Descricao, SalaId, SeriesId, TurmaId, GradeCurricularId FROM Matriculas WHERE AlunoId = ${alunoId} AND AnoLetivoId = ${anoLetivoId}`
        return executaQuery(sql).then(resposta => resposta[0])

    }
    excluir(alunoId, anoLetivoId) {
        const sql = `DELETE FROM Matriculas WHERE AlunoId = ${alunoId} AND AnoLetivoId = ${anoLetivoId}`
        return executaQuery(sql).then(() => {alunoId, anoLetivoId})
    }
}

module.exports = new Matricula