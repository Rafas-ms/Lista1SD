let nomes = prompt("Digite varios nomes: ");
function contrario(nomes_s){
    nomes = nomes_s.split(",");
    nomes.reverse();
    return nomes;
}

console.log(contrario(nomes));