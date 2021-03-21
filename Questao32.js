let idadeReal = prompt("Digite a idade real do seu cachorro: ")
function calcularIdadeDoCachorro(idadeReal_String){
    idadeReal = Number(idadeReal_String);
    let idadeCachorro = 0;
    idadeCachorro = idadeReal * 7;
    if(idadeCachorro<14) console.log("Crianca");
    else if(idadeCachorro>=14 && idadeCachorro<=28) console.log("Adolecente");
    else console.log("Adulto");
    console.log(idadeCachorro)
}
calcularIdadeDoCachorro(idadeReal);