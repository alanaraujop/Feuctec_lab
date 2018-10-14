// Determinando variavel da tabela de produtos
var tabelaProdutos = document.querySelector(".tabela");

tabelaProdutos.addEventListener("dblclick", function() {
    event.target.parentNode.remove();
});