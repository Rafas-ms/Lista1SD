let notas = [5,6,7,8,9];
function calcularMedia(notas){
    let soma = 0;
    for (let i = 0;i<notas.length;i++){
        soma = soma + notas[i];
    }
    let media = soma/notas.length;
    return media;
}
console.log(calcularMedia(notas));