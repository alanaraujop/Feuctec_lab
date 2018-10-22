function remover(_index,_lista) {
    //O metodo splice recebe dois parametro. O primeiro indica o indice a ser removido 
    //e o segundo quantos elementos será removido
    _lista.splice(_index, 1);
    return _lista;
    calculoTotal()
}

function adicionar(_item, _lista){    
    _lista.push(_item);
}

function limparForm(){
    var form = document.querySelector('#lista-compras');
    var campos = form.querySelectorAll('.input-txt');

    campos.forEach(campo => {
        campo.value = "";
    });
}

function atualizaLista(_seletor, _lista){
    _seletor.innerHTML =_lista;
}