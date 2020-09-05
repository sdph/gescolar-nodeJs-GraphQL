const Operacoes = require('../../infraestrutura/operations')

const Serie = new Operacoes('series')

const resolvers = {
    Query: {
        series: () => Serie.buscarTodos(),        
        serie: (root, {id}) => Serie.buscarPorId(id) 
    },
    Mutation: {
        adicionarSerie: (root, params) => Serie.adicionar(params),
        atualizarSerie: (root, params) => Serie.alterar(params),
        deletarSerie: (root, {id}) => Serie.excluir(id)
    }
}

module.exports = resolvers