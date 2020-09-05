const {GraphQLServer} = require('graphql-yoga')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')
const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/schemas')

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }
        console.log('conexão com o banco de dados realizada com sucesso')
        Tabelas.init(conexao)
})

const servidor = new GraphQLServer({
    resolvers,
    typeDefs
})

servidor.start(()=> console.log('Servidor ouvindo'))





