const Operacoes = require('../../infraestrutura/operations')

const Matricula = new Operacoes('matriculas')

const resolvers = {
    Query: {
        matriculas: () => Matricula.buscarTodos(),        
        matricula: (root, prams) => Matricula.buscarPorId(params) 
    },
    Mutation: {
        adicionarMatricula: (root, params) => Matricula.adicionar(params),
        atualizarMatricula: (root, params) => Matricula.alterar(params),
        deletarMatricula: (root, params) => Matricula.excluir(params)
    }
}

module.exports = resolvers