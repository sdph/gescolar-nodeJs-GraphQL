const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306', 
    user: 'root',
    password: 'admin',
    database: 'gescolar',
    multipleStatements: true
})

module.exports = conexao