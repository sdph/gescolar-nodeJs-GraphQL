const Operacoes = require('../../infraestrutura/operations')

const Documentacao = new Operacoes('documentacao')

const resolvers = {
    Query: {
        documentacoes: () => Documentacao.buscarTodos(),        
        documentacao: (root, {id}) => Documentacao.buscarPorId(id) 
    },
    Mutation: {
        adicionarDocumentacao: (root, params) => Documentacao.adicionar(params),
        atualizarDocumentacao: (root, params) => Documentacao.alterar(params),
        deletarDocumentacao: (root, {id}) => Documentacao.excluir(id)
    }
}

module.exports = resolvers