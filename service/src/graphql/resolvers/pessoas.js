const Operacoes = require('../../infraestrutura/operations')

const Pessoa = new Operacoes('pessoas')

const resolvers = {
    Query: {
        pessoas: () => Pessoa.buscarTodos(),        
        pessoa: (root, {id}) => Pessoa.buscarPorId(id) 
    },
    Mutation: {
        adicionarPessoa: (root, params) => Pessoa.adicionar(params),
        atualizarPessoa: (root, params) => Pessoa.alterar(params),
        deletarPessoa: (root, {id}) => Pessoa.excluir(id)
    }
}

module.exports = resolvers