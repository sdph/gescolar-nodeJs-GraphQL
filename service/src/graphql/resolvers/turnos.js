const Operacoes = require('../../infraestrutura/operations')

const Turno = new Operacoes('turnos')

const resolvers = {
    Query: {
        turnos: () => Turno.buscarTodos(),        
        turno: (root, {id}) => Turno.buscarPorId(id) 
    },
    Mutation: {
        adicionarTurno: (root, params) => Turno.adicionar(params),
        atualizarTurno: (root, params) => Turno.alterar(params),
        deletarTurno: (root, {id}) => Turno.excluir(id)
    }
}

module.exports = resolvers