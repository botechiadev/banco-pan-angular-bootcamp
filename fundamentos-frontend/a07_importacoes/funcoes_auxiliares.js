const entradas = [5, 10, 15, 94, 23];
let i = 0;
const gets=()=>{
  const valor = entradas[i];
  i++;
  return valor;
}

const print=(text)=>{
  console.log(text);  
}

export const funcoes = {gets, print}