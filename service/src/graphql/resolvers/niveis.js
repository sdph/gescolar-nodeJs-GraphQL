const Operacoes = require('../../infraestrutura/operations')

const Nivel = new Operacoes('niveis')

const resolvers = {
    Query: {
        niveis: () => Nivel.buscarTodos(),        
        nivel: (root, {id}) => Nivel.buscarPorId(id) 
    },
    Mutation: {
        adicionarNivel: (root, params) => Nivel.adicionar(params),
        atualizarNivel: (root, params) => Nivel.alterar(params),
        deletarNivel: (root, {id}) => Nivel.excluir(id)
    }
}

module.exports = resolvers