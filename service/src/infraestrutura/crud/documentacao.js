const executaQuery = require("../database/queries");

class Documentacao {
    adiciona(entidade) {
        const {tipoDocumento, numero, observacao, tipoDocumentoId, pessoasId} = entidade
        const sql = `INSERT INTO Documentacao (TipoDocumento, Numero, Observacao, TipoDocumentoId, PessoasId) 
        VALUES ('${tipoDocumento}', '${numero}', '${observacao}', ${tipoDocumentoId}, ${pessoasId})`
        return executaQuery(sql).then(resposta => ({
            id: resposta.insertId,
            tipoDocumento,
            numero, 
            observacao,
            tipoDocumentoId,
            pessoasId
        }))
    }

    alterar(entidade) {
        const {id, tipoDocumento, numero, observacao, tipoDocumentoId, pessoasId} = entidade
        const sql = `UPDATE Documentacao SET  TipoDocumento = '${tipoDocumento}',  Numero = '${numero}',  Observacao = '${observacao}',  TipoDocumentoId =  ${tipoDocumentoId},  PessoasId = ${pessoasId} WHERE id = ${id}`
        return executaQuery(sql).then(() => entidade)
    }
    buscarTodos() {
        const sql = `SELECT Id, TipoDocumento, Numero, Observacao, TipoDocumentoId, PessoasId FROM Documentacao`
        return executaQuery(sql)
    }
    buscarPorId(id) {
        const sql = `SELECT Id, TipoDocumento, Numero, Observacao, TipoDocumentoId, PessoasId FROM Documentacao WHERE Id = ${id}`
        return executaQuery(sql).then(resposta => resposta[0])
    }
    excluir(id) {
        const sql = `DELETE FROM Documentacao WHERE Id = ${id}`
        return executaQuery(sql).then(() => id)
    }
}

module.exports = new Documentacao