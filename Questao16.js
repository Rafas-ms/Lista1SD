let identidade = prompt("Digite o seu login: ");
let senha;

if(identidade=="Admin") {
    senha = prompt("Digite a senha: ");
    if(senha=="UniBH") alert("Bem vindo!");
    else if(senha!="UniBH") alert("Senha incorreta!");
    else if(senha==null || senha=="") alert("Cancelado!");
}
else if(identidade==null || identidade=="") alert("Cancelado!");
else if(identidade!="Admin") alert("Nao conheco voce!"); 

