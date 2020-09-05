const Operacoes = require('../../infraestrutura/operations')

const AnoLetivo = new Operacoes('anosletivos')

const resolvers = {
    Query: {
        anosLetivos: () => AnoLetivo.buscarTodos(),        
        anoLetivo: (root, {id}) => AnoLetivo.buscarPorId(id) 
    },
    Mutation: {
        adicionarAnoLetivo: (root, params) => AnoLetivo.adicionar(params),
        atualizarAnoLetivo: (root, params) => AnoLetivo.alterar(params),
        deletarAnoLetivo: (root, {id}) => AnoLetivo.excluir(id)
    }
}

module.exports = resolvers