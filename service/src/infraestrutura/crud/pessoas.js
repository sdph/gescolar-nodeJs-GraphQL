const executaQuery = require("../database/queries");

class Pessoa {
    adiciona(entidade) {
        const {nome, cpf, dataNascimento, sexo, nacionalidade, naturalidade, categoriaPessoaId, pessoasPaiId, pessoasMaeId} = entidade
        const sql = `INSERT INTO Pessoas (Nome, Cpf, DataNascimento, Sexo, Nacionalidade, Naturalidade, CategoriaPessoaId, PessoasPaiId, PessoasMaeId)  VALUES ('${nome}', '${cpf}', '${dataNascimento}', '${sexo}', '${nacionalidade}', '${naturalidade}', ${categoriaPessoaId}, ${pessoasPaiId}, ${pessoasMaeId})`
        return executaQuery(sql).then(resposta => ({
            id: resposta.insertId,
            nome, 
            cpf, 
            dataNascimento, 
            sexo, 
            nacionalidade, 
            naturalidade, 
            categoriaPessoaId, 
            pessoasPaiId, 
            pessoasMaeId
        }))
    }

    alterar(entidade) {
        const {id, nome, cpf, dataNascimento, sexo, nacionalidade, naturalidade, categoriaPessoaId, pessoasPaiId, pessoasMaeId} = entidade
        const sql = `UPDATE Pessoas SET Nome = '${nome}',  Cpf = '${cpf}',  DataNascimento = '${dataNascimento}',  Sexo = '${sexo}',  Nacionalidade = '${nacionalidade}',  Naturalidade = '${naturalidade}',  CategoriaPessoaId = ${categoriaPessoaId},  PessoasPaiId = ${pessoasPaiId},  PessoasMaeId = ${pessoasMaeId}  WHERE id = ${id}`
        return executaQuery(sql).then(() => entidade)

    }
    buscarTodos() {
        const sql = `SELECT Id, Nome, Cpf, DataNascimento, Sexo, Nacionalidade, Naturalidade, CategoriaPessoaId, PessoasPaiId, PessoasMaeId FROM Pessoas`
        return executaQuery(sql)

    }
    buscarPorId(id) {
        const sql = `SELECT Id, Nome, Cpf, DataNascimento, Sexo, Nacionalidade, Naturalidade, CategoriaPessoaId, PessoasPaiId, PessoasMaeId FROM Pessoas WHERE Id = ${id}`
        return executaQuery(sql).then(resposta => resposta[0])
    }
    excluir(id) {
        const sql = `DELETE FROM Pessoas WHERE Id = ${id}`
        return executaQuery(sql).then(() => id)
    }
}

module.exports = new Pessoa