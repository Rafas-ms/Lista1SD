let valor = prompt("Digite o valor do produto: ");
if(!(valor>=100 && valor<=200)) console.log("O valor do produto nao esta entre 100 e 200 reais (Utilizando o NOT)");
else console.log("O valor do produto esta entre 100 e 200 reais (Utilizando o NOT)");

if(valor<100 || valor>200) console.log("O valor do produto nao esta entre 100 e 200 reais");
else console.log("O valor do produto esta entre 100 e 200 reais");