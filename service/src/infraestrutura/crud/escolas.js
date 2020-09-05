const executaQuery = require("../database/queries");

class Escola {

    adicionar(entidade){
        const {nome, cnpj, cep, endereco, complemento, bairro, cidade, estado, telefone, email, site} = entidade
        const sql = `INSERT INTO Instituicoes (Nome, Cnpj, Cep, Endereco, Complemento, Bairro, Cidade, Estado, Telefone, Email, Site) VALUES ('${nome}', '${cnpj}', '${cep}', '${endereco}', '${complemento}', '${bairro}', '${cidade}', '${estado}', '${telefone}', '${email}', '${site}')`
        return executaQuery(sql).then(resposta => (
            {
                id: resposta.insertId,
                nome, 
                cnpj,
                cep,
                endereco,
                complemento,
                bairro,
                cidade,
                estado,
                telefone,
                email,
                site
        }))               
    }

    alterar(entidade){
        const {id, nome, cnpj, cep, endereco, complemento, bairro, cidade, estado, telefone, email, site} = entidade
        const sql = `UPDATE Instituicoes SET Nome = '${nome}', Cnpj = '${cnpj}', Cep = '${cep}' , Endereco = '${endereco}', Complemento = '${complemento}', Bairro = '${bairro}', Cidade = '${cidade}' , Estado = '${estado}', Telefone = '${telefone}', Email = '${email}', Site = '${site}'  WHERE Id = ${id}`
        return executaQuery(sql).then(() => entidade)
    }
    
    buscarTodos(){
        const sql = 'SELECT id, nome, cnpj, cep, endereco, complemento, bairro, cidade, estado, telefone, email, site FROM Instituicoes'
        return executaQuery(sql).then(instituicoes => instituicoes.map(escola => ({            
            id: escola.id,
            nome: escola.nome,
            cnpj: escola.cnpj,
            cep: escola.cep,
            endereco: escola.endereco,
            complemento: escola.complemento,
            bairro: escola.bairro,
            cidade: escola.cidade,
            estado: escola.estado,
            telefone: escola.telefone,
            email: escola.email,
            site: escola.site
        })))
    }
    buscarPorId(id){
        const sql = `SELECT id, nome, cnpj, cep, endereco, complemento, bairro, cidade, estado, telefone, email, site FROM Instituicoes WHERE id=${id}`
        return executaQuery(sql).then(escolas => ({
            id: escolas[0].id,
            nome: escolas[0].nome,
            cnpj: escolas[0].cnpj,
            cep: escolas[0].cep,
            endereco: escolas[0].endereco,
            complemento: escolas[0].complemento,
            bairro: escolas[0].bairro,
            cidade: escolas[0].cidade,
            estado: escolas[0].estado,
            telefone: escolas[0].telefone,
            email: escolas[0].email,
            site: escolas[0].site

        }))
    }
    excluir(id){
        const sql = `DELETE FROM Instituicoes WHERE id=${id}`
        return executaQuery(sql).then(() => id)
    }

}

module.exports = new Escola