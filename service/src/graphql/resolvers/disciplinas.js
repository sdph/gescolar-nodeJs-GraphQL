const Operacoes = require('../../infraestrutura/operations')

const Disciplina = new Operacoes('disciplinas')

const resolvers = {
    Query: {
        disciplinas: () => Disciplina.buscarTodos(),        
        disciplina: (root, {id}) => Disciplina.buscarPorId(id) 
    },
    Mutation: {
        adicionarDisciplina: (root, params) => Disciplina.adicionar(params),
        atualizarDisciplina: (root, params) => Disciplina.alterar(params),
        deletarDisciplina: (root, {id}) => Disciplina.excluir(id)
    }
}

module.exports = resolvers