const cruds = require('./crud/index')

class Operations {
    constructor(entidade){
        this._entidade = entidade
    }

    buscarTodos(){
        return cruds[this._entidade].buscarTodos()
    }

    buscarPorId(id){
        return cruds[this._entidade].buscarPorId(id)
    }
    adicionar(item){
        return cruds[this._entidade].adicionar(item)
    }
    alterar(novoItem, id){
        return cruds[this._entidade].alterar( novoItem, id)
    }

    excluir(id){
        return cruds[this._entidade].excluir(id)
    }
}

module.exports = Operations