const Operacoes = require('../../infraestrutura/operations')

const Endereco = new Operacoes('enderecos')

const resolvers = {
    Query: {
        enderecos: () => Endereco.buscarTodos(),        
        endereco: (root, {id}) => Endereco.buscarPorId(id) 
    },
    Mutation: {
        adicionarEndereco: (root, params) => Endereco.adicionar(params),
        atualizarEndereco: (root, params) => Endereco.alterar(params),
        deletarEndereco: (root, {id}) => Endereco.excluir(id)
    }
}

module.exports = resolvers