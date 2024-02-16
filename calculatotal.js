//Captura todos os clientes que fizeram encomendas
var clientes = document.querySelectorAll(".cliente");

//Passa por cada encomenda, calculando o valor total
for (var count=0; count < clientes.length; count++){

    //captura a quantidade encomendada
    var qtde = clientes[count].querySelector(".quantidade").textContent;

    //captura o valor unitário do produto
    var unitario = clientes[count].querySelector(".valor-unitario").textContent;

    //Calcula o valor total da encomenda
    clientes[count].querySelector(".total").textContent = qtde * unitario;
}