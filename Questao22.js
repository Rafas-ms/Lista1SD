function somarValores(){
    let i = 0;
    let array = [];
    while(!(isNaN(i))){
      i = prompt("Digite os numeros que vao ser somados:\n(Digite alguma palavra ou clique cancelar para sair)");
      if(!(isNaN(i))) array.push(Number(i));
      if(i==null || i=="") i="a";
    }
    let soma = 0;
    for(let i=0; i<array.length; i++){
        soma = soma + array[i];
    }
    return soma;
}
console.log(somarValores());
