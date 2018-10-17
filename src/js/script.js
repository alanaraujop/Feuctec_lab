var lista = [
    {'nome': 'Alface', 'quantidade': 2, 'preco': 5},
    {'nome': 'Feijão', 'quantidade': 1, 'preco': 8},
    {'nome': 'Chuchu', 'quantidade': 4, 'preco': 2},
];

atualizaLista(document.querySelector('.tabela'), montaLista(lista));

document.querySelector('#adicionar').addEventListener('click', () => adicionarItem(event));

function adicionarItem(_event) {
    _event.preventDefault();
    var tabela = document.querySelector('.tabela');
    var form = document.querySelector('#lista-compras');
    var produto = obtemProdutoDoForm(form);
    adicionar(produto, lista);
    limparForm();
    atualizaLista(document.querySelector('.tabela'), montaLista(lista));
}

function removerItem(_index){
    let _lista = remover(_index, lista);
    atualizaLista(document.querySelector('.tabela'), montaLista(_lista));
}

function obtemProdutoDoForm(form) {
    var produto = {
        nome: form.nome.value,
        quantidade: form.quantidade.value,
        preco: form.preco.value,
    };
    return produto;
};

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
                     <button class="box delete" onclick="removerItem(${index})">X</button>
                 </td>
               </tr>`;
     return produtoTr;
 };