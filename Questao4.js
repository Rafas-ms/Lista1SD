let num = prompt("Digite 5 números separados por vírgula!",0);
function maiorNumero(num_string){
    num = num_string.split(",")
    let maior = 0;
    for(let i=0; i<5; i++){
        if(Number(num[i])>maior){
            maior = Number(num[i]);
        }
    }
    return maior;
}
console.log(maiorNumero(num));