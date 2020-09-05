const executaQuery = require("../database/queries");

class CategoriaPessoa {

    adiciona(entidade) {
        const {categoria} = entidade
        const sql = `INSERT INTO CategoriaPessoa (Categoria) VALUES ('${categoria}') `
        return executaQuery(sql).then(resposta => {
            const categoria = resposta
            return ({
                id: categoria.insertId,
                categoria
            })
        })
    }

    alterar(entidade) {
        const {id, categoria} = entidade
        const sql = `UPDATE CategoriaPessoa SET Categoria = '${categoria}' WHERE Id = ${id} `
        return executaQuery(sql).then(() => entidade)
    }

    buscarTodos() {
        const sql = `SELECT Id, Categoria FROM CategoriaPessoa`
        return executaQuery(sql).then(categorias)
    }

    buscarPorId(id) {
        const sql = `SELECT Id, Categoria FROM CategoriaPessoa WHERE id=${id}`
        return executaQuery(sql).then(categorias => ({
            id: categorias.id,
            categoria: categorias.categoria
        }))
    }

    excluir(id) {
        const sql = `DELETE FROM CategoriaPessoa WHERE id = ${id}`
        return executaQuery(sql).then(() => id)
    }
}

module.exports = new CategoriaPessoa