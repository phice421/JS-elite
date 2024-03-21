function adicionarEncomenda() {
  // Obter os valores do formulário
  var nome = document.getElementById("nome").value;
  var qtde = document.getElementById("quantidade").value;
  var prod = document.getElementById("produto").value;
  var valor = parseFloat(document.getElementById("valor").value);
  
  // Calcular o total
  var total = calculaTotal(qtde, valor);
  
  // Criar uma nova linha na tabela
  var tabela = document.getElementById("nova-tabela-encomendas");
  
  var novaLinha = tabela.insertRow();
  var colunaNome = novaLinha.insertCell(0);
  var colunaProduto = novaLinha.insertCell(1);
  var colunaQuantidade = novaLinha.insertCell(2);
  var colunaValor = novaLinha.insertCell(3);
  var colunaTotal = novaLinha.insertCell(4);
  
  // Adicionar os valores às células da nova linha
  colunaNome.textContent = nome;
  colunaProduto.textContent = prod;
  colunaQuantidade.textContent = qtde;
  colunaValor.textContent = formataValor(valor);
  colunaTotal.textContent = formataValor(total);
}

function formataValor(valor) {
  // Função para formatar o valor para duas casas decimais
  return parseFloat(valor).toFixed(2);
}

document.getElementById("form-nova-encomenda").addEventListener("submit", function(event) {
  // Impedir o envio do formulário padrão
  event.preventDefault();
  
  // Adicionar a nova encomenda à tabela
  adicionarEncomenda();
  
  // Limpar o formulário após adicionar a encomenda
  document.getElementById("form-nova-encomenda").reset();
});