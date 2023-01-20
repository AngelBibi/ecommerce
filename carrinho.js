var resumo = document.getElementById('descricao');
var qtdeProduto = document.getElementById('qtdeProduto');
var total = document.getElementById('valorTotal');
var valorSapatilha;
var valorTotalCompra;
resumo.innerHTML = '<p><strong>Descrição do produto:</strong></p>' +  sessionStorage.descricao  +
' <strong>' + sessionStorage.valor + '</strong>';
qtdeProduto.addEventListener('change', calculaValorTotalCompra);
valorSapatilha = sessionStorage.valor;
valorSapatilha = valorSapatilha.replaceAll('€', ' ');
valorSapatilha = valorSapatilha.replaceAll(',', '.');

function calculaValorTotalCompra(){
  valorSapatilha = Number(valorSapatilha);
  valorTotalCompra = valorSapatilha*qtdeProduto.value;
  total.innerHTML = '<p> <strong>Valor total da compra: </strong></p>' + '<strong>€' + valorTotalCompra + '</strong>';

}
