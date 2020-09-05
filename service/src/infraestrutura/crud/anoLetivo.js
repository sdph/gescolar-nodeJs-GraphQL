const executaQuery = require("../database/queries");

class AnoLetivo {

    adiciona(entidade) {
        const {primeiroSemestreInicio, primeiroSemestreTermino, segundoSemestreInicio, segundoSemestreTermino} = entidade
        const sql = `INSERT INTO AnoLetivo (Id, PrimeiroSemestreInicio, PrimeiroSemestreTermino, SegundoSemestreInicio, SegundoSemestreTermino)  VALUES (${id}, '${primeiroSemestreInicio}', '${primeiroSemestreTermino}', '${segundoSemestreInicio}', '${segundoSemestreTermino}') `
        return executaQuery(sql).then(resposta => ({
            id: resposta.insertId,
            primeiroSemestreInicio,
            primeiroSemestreTermino,
            segundoSemestreInicio,
            segundoSemestreTermino
        }))
    }

    alterar(entidade) {
        const {id, primeiroSemestreInicio, primeiroSemestreTermino, segundoSemestreInicio, segundoSemestreTermino} = entidade
        const sql = `UPDATE AnoLetivo SET  PrimeiroSemestreInicio = '${primeiroSemestreInicio}',  PrimeiroSemestreTermino = '${primeiroSemestreTermino}',  SegundoSemestreInicio = '${segundoSemestreInicio}',  SegundoSemestreTermino = '${segundoSemestreTermino}' WHERE Id = ${id}`
        return executaQuery(sql).then(() => entidade)
    }

    buscarTodos() {
        const sql = `SELECT Id, PrimeiroSemestreInicio, PrimeiroSemestreTermino, SegundoSemestreInicio, SegundoSemestreTermino FROM AnoLetivo`
        return executaQuery(sql)
    }
    buscarPorId(id) {
        const sql = `SELECT Id, PrimeiroSemestreInicio, PrimeiroSemestreTermino, SegundoSemestreInicio, SegundoSemestreTermino FROM AnoLetivo WHERE id=${id}`
        return executaQuery(sql).then(resposta => resposta[0])
    }
    excluir(id) {
        const sql = `DELETE FROM AnoLetivo WHERE id = ${id}`
        return executaQuery(sql).then(()=>id)
    }
}

module.exports = new AnoLetivo