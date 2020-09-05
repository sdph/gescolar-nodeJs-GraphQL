const Operacoes = require('../../infraestrutura/operations')

const GradeCurricular = new Operacoes('gradesCurriculares')

const resolvers = {
    Query: {
        gradesCurriculares: () => GradeCurricular.buscarTodos(),        
        gradeCurricular: (root, {id}) => GradeCurricular.buscarPorId(id) 
    },
    Mutation: {
        adicionarGradeCurricular: (root, params) => GradeCurricular.adicionar(params),
        atualizarGradeCurricular: (root, params) => GradeCurricular.alterar(params),
        deletarGradeCurricular: (root, {id}) => GradeCurricular.excluir(id)
    }
}

module.exports = resolvers