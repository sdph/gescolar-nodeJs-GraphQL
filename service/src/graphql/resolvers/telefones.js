const Operacoes = require('../../infraestrutura/operations')

const Telefone = new Operacoes('telefones')

const resolvers = {
    Query: {
        telefones: () => Telefone.buscarTodos(),        
        telefone: (root, {id}) => Telefone.buscarPorId(id) 
    },
    Mutation: {
        adicionarTelefone: (root, params) => Telefone.adicionar(params),
        atualizarTelefone: (root, params) => Telefone.alterar(params),
        deletarTelefone: (root, {id}) => Telefone.excluir(id)
    }
}

module.exports = resolvers