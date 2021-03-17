let idade = prompt("Digite varias idades separadas por virgula: ");
function deMaior(idade_string){
    idade = idade_string.split(",");
    let contDeMaior = 0;
    let contDeMenor = 0;
    for(let i=0; i<idade.length; i++){
        if(Number(idade[i]) >= 18)  contDeMaior++;
        else contDeMenor++;
    }
    console.log("O numero de pessoas que sao maior de idade e "+contDeMaior);
    console.log("O numero de pessoas que sao menor de idade e "+contDeMenor);
}
deMaior(idade);