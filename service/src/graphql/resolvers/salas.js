const Operacoes = require('../../infraestrutura/operations')

const Sala = new Operacoes('salas')

const resolvers = {
    Query: {
        salas: () => Sala.buscarTodos(),        
        sala: (root, {id}) => Sala.buscarPorId(id) 
    },
    Mutation: {
        adicionarSala: (root, params) => Sala.adicionar(params),
        atualizarSala: (root, params) => Sala.alterar(params),
        deletarSala: (root, {id}) => Sala.excluir(id)
    }
}

module.exports = resolvers