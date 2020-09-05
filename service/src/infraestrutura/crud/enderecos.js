const executaQuery = require("../database/queries");

class Endereco {
    adiciona(entidade) {
        const {cep, endereco, complemento, bairro, cidade, estado, pessoasId} = entidade
        const sql = `INSERT INTO Enderecos (Cep, Endereco, Complemento, Bairro, Cidade, Estado, PessoasId)  VALUES ('${cep}', '${endereco}', '${complemento}', '${bairro}', '${cidade}', '${estado}', ${pessoasId})` 
        return executaQuery(sql).then(resposta => resposta({
            id: resposta.insertId,
            cep,
            endereco,
            complemento,
            bairro,
            cidade,
            estado, 
            pessoasId
        }))
    }

    alterar(entidade) {
        const {id, cep, endereco, complemento, bairro, cidade, estado, pessoasId} = entidade
        const sql = `UPDATE Enderecos SET  Cep = '${cep}',  Endereco = '${endereco}',  Complemento = '${complemento}',  Bairro = '${bairro}',  Cidade = '${cidade}',  Estado =  '${estado}',  PessoasId = ${pessoasId} WHERE id = ${id}`
        return executaQuery(sql).then(() => entidade)
    }
    buscarTodos() {
        const sql = `SELECT Id, Cep, Endereco, Complemento, Bairro, Cidade, Estado, PessoasId FROM Enderecos`
        return executaQuery(sql)
    }
    buscarPorId(id) {
        const sql = `SELECT Id, Cep, Endereco, Complemento, Bairro, Cidade, Estado, PessoasId FROM Enderecos WHERE Id = ${id}`
        return executaQuery(sql).then(resposta => resposta[0])
    }
    excluir(id) {
        const sql = `DELETE FROM Enderecos WHERE Id = ${id}`
        return executaQuery(sql).then(() => id)
    }
}

module.exports = new Endereco