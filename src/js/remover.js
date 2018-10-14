//Pegando array de botõtes delete
var buttonDelete = document.querySelectorAll(".delete");

buttonDelete.forEach(function (button) {
    button.addEventListener("click", function () {
        var tdParent = button.parentNode;
        var trParent = tdParent.parentNode;
        trParent.remove();
    })
});