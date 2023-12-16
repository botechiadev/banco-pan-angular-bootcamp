import { funcoes } from './funcoes_auxiliares.js';
const { gets, print } = funcoes;

const numeroSorteados = [];
for (let i = 0; i < 5; i++) {
  const numeroSorteado = gets();
  numeroSorteados.push(numeroSorteado);
}

let maiorValor = 0;

// Correção: troquei o sinal de igual por menor pq maiorValor comeca em 0
for (let i = 0; i < numeroSorteados.length; i++) {
  const numeroSorteado = numeroSorteados[i];
  if (numeroSorteado > maiorValor) {
    maiorValor = numeroSorteado;
  }
}

print(maiorValor);
