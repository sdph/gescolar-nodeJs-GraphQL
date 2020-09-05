const Operacoes = require('../../infraestrutura/operations')

const TipoDocumento = new Operacoes('tiposDocumento')

const resolvers = {
    Query: {
        tiposDocumentos: () => TipoDocumento.buscarTodos(),        
        tipoDocumento: (root, {id}) => TipoDocumento.buscarPorId(id) 
    },
    Mutation: {
        adicionarTipoDocumento: (root, params) => TipoDocumento.adicionar(params),
        atualizarTipoDocumento: (root, params) => TipoDocumento.alterar(params),
        deletarTipoDocumento: (root, {id}) => TipoDocumento.excluir(id)
    }
}

module.exports = resolvers