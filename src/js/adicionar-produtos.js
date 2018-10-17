var btnAdicionar = document.querySelector('.btn-primary');
btnAdicionar.addEventListener('click', function (event) {
    event.preventDefault();

    var form = document.querySelector('#lista-compras');

    var produto = obtemProdutoDoForm(form);
    var produtoTr = montaTr(produto);
    var tabela = document.querySelector('.tabela');

    tabela.appendChild(produtoTr)

});

function obtemProdutoDoForm(form) {
    var produto = {
        nome: form.nome.value,
        quantidade: form.quantidade.value,
        preco: form.preco.value,

    };
    return produto;
};

function montaTr(produto) {
    // var buttonDelete = document.querySelectorAll(".delete");
    btnDelete = document.createElement('button').textContent = 'x';
    var produtoTr = document.createElement('tr');
    produtoTr.classList.add('linha');

    produtoTr.appendChild(montaTd(produto.nome, 'info-ordem'));
    produtoTr.appendChild(montaTd(produto.nome, 'info-nome'));
    produtoTr.appendChild(montaTd(produto.quantidade, 'info-quantidade'));
    produtoTr.appendChild(montaTd(produto.preco, 'info-preco'));
    produtoTr.appendChild(montaTdButton('X', 'delete', 'box'));

    return produtoTr;
};

function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);


    return td;
};

function montaTdButton(dado, classe, classe2){
    var tdButton = document.createElement('td');

    var button = document.createElement('button');
    button.textContent = dado;
    button.classList.add(classe, classe2);

    tdButton.appendChild(button);

    return tdButton;
}