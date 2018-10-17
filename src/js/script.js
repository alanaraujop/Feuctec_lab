var lista = [
    {'nome': 'Alface', 'quantidade': 2, 'preco': 5},
    {'nome': 'Feijão', 'quantidade': 1, 'preco': 8},
    {'nome': 'Chuchu', 'quantidade': 4, 'preco': 2},
];

function montaLista(_lista){
    var listaHtml = "";
    for(i=0 ; i < _lista.length; i++){
        listaHtml += montaTr(_lista[i], i);
    };
    return listaHtml;
}

function montaTr(produto, index) {
    var produtoTr =  `<tr class="linha ">
                 <td class="info-ordem">${index + 1}</td>
                 <td class="info-nome">${produto.nome}</td>
                 <td class="info-quantidade">${produto.quantidade}</td>
                 <td class="info-preco">${produto.preco}</td>
                 <td>
                     <button class="box delete" onclick="remover(${index})">X</button>
                 </td>
               </tr>`;
     return produtoTr;
 };

function atualizaLista(){
    document.querySelector('.tabela').innerHTML = montaLista(lista);
}

function remover(_index) {
    //O metodo splice recebe dois parametro. O primeiro indica o indice a ser removido 
    //e o segundo quantos elementos será removido
    lista.splice(_index, 1);
    atualizaLista();
}

var btnAdicionar = document.querySelector('.btn-primary');
btnAdicionar.addEventListener('click', function (event) {
    event.preventDefault();
    var form = document.querySelector('#lista-compras');
    var produto = obtemProdutoDoForm(form);
    lista.push(produto);
    atualizaLista();   
});

function obtemProdutoDoForm(form) {
    var produto = {
        nome: form.nome.value,
        quantidade: form.quantidade.value,
        preco: form.preco.value,

    };
    return produto;
};


atualizaLista();
