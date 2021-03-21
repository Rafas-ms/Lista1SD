let cpf = prompt("Digite o seu CPF: ");
function validarCPF(cpf_String){
    cpf = cpf_String.split("");
    let soma = 0;
    for(let i=0; i<cpf.length; i++){
        soma = soma + Number(cpf[i]);
    }
    if(cpf.length==11 && soma<=80)  console.log("CPF valido");
    else console.log("CPF nao e valido");
}
validarCPF(cpf);
