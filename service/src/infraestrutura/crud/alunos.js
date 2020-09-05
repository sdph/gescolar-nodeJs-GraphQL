const executaQuery = require("../database/queries");

class Aluno {
    adiciona(entidade) {
        //Adicionar validação
        const { escolaOrigem, bolsa, pessoasId } = entidade;
        const sql = `INSERT INTO Alunos (EscolaOrigem, Bolsa, PessoasId) VALUES ('${escolaOrigem}', '${bolsa}', ${pessoasId}); ` + 
                    `SELECT * FROM Pessoas where id = ${pessoasId}`;
        return executaQuery(sql).then(resposta => ({
            id: resposta.insertId,
            escolaOrigem,
            bolsa,
            pessoasId
        }))
    }

    alterar(entidade) {
        //Adicionar validação
        const { id, escolaOrigem, bolsa, pessoasId } = entidade;
        const sql = `UPDATE Alunos SET '${escolaOrigem}', '${bolsa}', ${pessoasId} WHERE Id = ${id}; SELECT * FROM Pessoas WHERE id = ${pessoasId}`;

        return executaQuery(sql).then((resposta) => {
            const aluno = resposta[0];
            const pessoa = resposta[1][0];

            return {
                aluno,
                pessoa
            };
        });
    }

    buscarTodos() {
        const sql = `SELECT Alunos.Id, Alunos.EscolaOrigem, Alunos.Bolsa, Alunos.PessoasId, Pessoas.Id, Pessoas.Nome, Pessoas.Cpf, Pessoas.DataNascimento,  Pessoas.Sexo, Pessoas.Nacionalidade, Pessoas.Naturalidade,  Pessoas.CategoriaPessoaId, Pessoas.PessoasPaiId, Pessoas.PessoasMaeId  FROM Alunos  INNER JOIN Pessoas on Alunos.pessoasId = Pessoas.id`;
        return executaQuery(sql)
    }

    buscarPorId(id) {
        const sql = `SELECT Alunos.Id, Alunos.EscolaOrigem, Alunos.Bolsa, Alunos.PessoasId, Pessoas.Id, Pessoas.Nome, Pessoas.Cpf, Pessoas.DataNascimento,  Pessoas.Sexo, Pessoas.Nacionalidade, Pessoas.Naturalidade,  Pessoas.CategoriaPessoaId, Pessoas.PessoasPaiId, Pessoas.PessoasMaeId  FROM Alunos  INNER JOIN Pessoas on Alunos.pessoasId = Pessoas.id WHERE Aluno.Id = ${id}`;

        return executaQuery(sql)

    }

    excluir(id) {
        //Adicionar validação
        const sql = `DELETE FROM Alunos WHERE id=${id}`;
        return executaQuery(sql).then(() => id);
    }
}

module.exports = new Aluno;
