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
    produtoTr.appendChild(montaTd(btnDelete, 'delete'));

    return produtoTr;
};

function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);


    return td;
};

