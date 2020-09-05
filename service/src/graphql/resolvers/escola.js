const Operacoes = require('../../infraestrutura/operations')

const Escola = new Operacoes('escola')

const resolvers = {
    Query: {
        escolas: () => Escola.buscarTodos(),        
        escola: (root, {id}) => Escola.buscarPorId(id) 
    },
    Mutation: {
        adicionarEscola: (root, params) => Escola.adicionar(params),
        atualizarEscola: (root, params) => Escola.alterar(params),
        deletarEscola: (root, {id}) => Escola.excluir(id)
    }
}

module.exports = resolvers