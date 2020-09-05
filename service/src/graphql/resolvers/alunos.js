const Operacoes = require('../../infraestrutura/operations')

const aluno = new Operacoes('alunos')

const resolvers = {
    Query: {
        alunos: () => aluno.buscarTodos(),        
        aluno: (root, {id}) => aluno.buscarPorId(id) 
    },
    Mutation: {
        adicionarAluno: (root, params) => aluno.adicionar(params),
        atualizarAluno: (root, params) => aluno.alterar(params),
        deletarAluno: (root, {id}) => aluno.excluir(id)
    }
}

module.exports = resolvers