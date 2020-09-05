const Operacoes = require('../../infraestrutura/operations')

const Categoria = new Operacoes('categorias')

const resolvers = {
    Query: {
        categorias: () => Categoria.buscarTodos(),        
        categoria: (root, {id}) => Categoria.buscarPorId(id) 
    },
    Mutation: {
        adicionarCategoria: (root, params) => Categoria.adicionar(params),
        atualizarCategoria: (root, params) => Categoria.alterar(params),
        deletarCategoria: (root, {id}) => Categoria.excluir(id)
    }
}

module.exports = resolvers