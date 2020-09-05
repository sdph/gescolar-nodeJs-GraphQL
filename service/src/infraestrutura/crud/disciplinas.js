const executaQuery = require("../database/queries");

class Disciplina {

    adiciona(entidade) {
        const {nome, descricao} = entidade
        const sql = `INSERT INTO disciplinas ( Nome, Descricao) VALUES ( '${nome}', '${descricao}') `
        return executaQuery(sql).then(resposta => {
            const pessoa = resposta
            return ({
                id: pessoa.insertId,
                nome, 
                descricao
            })
        })
    }

    alterar(entidade) {
        const {id, nome, descricao} = entidade
        const sql = `UPDATE disciplinas SET Nome = '${nome}', Descricao = '${descricao}' WHERE Id = ${id}`
        return executaQuery(sql).then(() => entidade)
    }

    buscarTodos() {
        const sql = `SELECT Id, Nome, Descricao FROM disciplinas`
        return executaQuery(sql).then(disciplinas)
    }

    buscarPorId(id) {
        const sql = `SELECT Id, Nome, Descricao FROM disciplinas WHERE id=${id}`
        return executaQuery(sql).then(disciplina)        
    }
    
    excluir(id) {
        const sql = `DELETE FROM disciplinas WHERE id = ${id} `
        return executaQuery(sql).then(() => id)
    }

}

module.exports = new Disciplina