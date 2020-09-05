const Operacoes = require('../../infraestrutura/operations')

const Turma = new Operacoes('turmas')

const resolvers = {
    Query: {
        turmas: () => TipoDocumento.buscarTodos(),        
        turma: (root, {id}) => TipoDocumento.buscarPorId(id) 
    },
    Mutation: {
        adicionarTurma: (root, params) => Turma.adicionar(params),
        atualizarTurma: (root, params) => Turma.alterar(params),
        deletarTurma: (root, {id}) => Turma.excluir(id)
    }
}

module.exports = resolvers