
function calculoTotal() {
    
    var totalNumber = document.querySelector(".total-number");
    totalNumber.textContent = parseInt(0);
    
    lista.forEach(function (item) {
        var precoItem = parseInt(item.preco) * parseInt(item.quantidade);
        
        var soma = parseInt(totalNumber.textContent) + precoItem;
        
        totalNumber.textContent = soma;
        return totalNumber;
    });
}

calculoTotal();