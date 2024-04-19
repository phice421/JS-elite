function adicionarEncomenda() {
  // Obter os valores do formulário
  var nome = document.getElementById("nome").value;
  var produto = document.getElementById("produto").value;
  var quantidade = parseInt(document.getElementById("quantidade").value);
  var valorUnitario = parseFloat(document.getElementById("valor_unitario").value);
  var total = quantidade * valorUnitario;

  // Obter a referência da tabela de encomendas
  var tabela = document.getElementById("tabela-encomendas").getElementsByTagName('tbody')[0];

  // Criar uma nova linha e células para a nova encomenda
  var novaLinha = tabela.insertRow();
  var colunaNome = novaLinha.insertCell(0);
  var colunaProduto = novaLinha.insertCell(1);
  var colunaQuantidade = novaLinha.insertCell(2);
  var colunaValorUnitario = novaLinha.insertCell(3);
  var colunaTotal = novaLinha.insertCell(4);

  // Inserir os valores nas células da nova linha, adicionando "R$" antes dos valores numéricos
  colunaNome.innerHTML = nome;
  colunaProduto.innerHTML = produto;
  colunaQuantidade.innerHTML = quantidade;
  colunaValorUnitario.innerHTML = "R$" + valorUnitario.toFixed(2);
  colunaTotal.innerHTML = "R$" + total.toFixed(2);

  // Limpar os campos do formulário após adicionar a encomenda
  document.getElementById("nome").value = "";
  document.getElementById("produto").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("valor_unitario").value = "";
}


// criar alert para quando um campo do formulario estiver vazio e para salvar na tabela 
