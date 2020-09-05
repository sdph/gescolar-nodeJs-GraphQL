const executaQuery = require("../database/queries");

class TipoDocumento {
    adiciona(entidade) {
        const {
            documento
        } = entidade
        const sql = `INSERT INTO TipoDocumento (Documento) VALUES (${documento})`
        return executaQuery(sql).then(resposta => ({
            id: resposta.insertId,
            documento
        }))
    }

    altera(entidade) {
        const {
            id,
            documento
        } = entidade
        const sql = `UPDATE TipoDocumento SET Documento = ${documento} WHERE Id = ${id}`
        return executaQuery(sql).then(() => entidade)
    }
    buscarTodos() {
        const sql = `SELECT Id, Documento FROM TipoDocumento`
        return executaQuery(sql)
    }
    buscarPorId(id) {
        const sql = `SELECT Id, Documento FROM TipoDocumento WHERE Id = ${id}}`
        return executaQuery(sql).then(resposta => resposta[0])
    }
    excluir(id) {
        const sql = `DELETE FROM TipoDocumento WHERE Id = ${id}`
        return executaQuery(sql).then(() => id)
    }
}
module.exports = new TipoDocumento