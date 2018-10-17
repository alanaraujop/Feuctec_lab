function calculoTotal(){
    //Pegando Array com preços de cada Td
    var tdPrecos = document.querySelectorAll(".valor");

    //Pegando elementoHtml do total
    var total = document.querySelector(".total-number");

    // Percorrendo todos Preços da lista e returnando o total
    tdPrecos.forEach(function(preco){
        //Pegando TextContent do Preço da Td percorrida
        var valor = preco.textContent;

        var soma = parseInt(total.textContent) + parseInt(valor);

        //Atualizando total e retornandos
        total.textContent = soma;
        return total;
    });
}