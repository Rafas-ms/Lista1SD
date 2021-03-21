let meuPinguim = {
    nome:"Capitao",
    autor: "Tom McGrath",
    origem: "Madagascar",
    medo: "agulhas"
}
console.log("Ola, sou um pinguim e meu nome e "+meuPinguim.nome);

meuPinguim.podeVoar = false;
meuPinguim.emitirSom = function(){
    console.log("CHIRP CHIRP! E assim que os pinguins se parecem?");
}
meuPinguim.emitirSom();

meuPinguim.fly = function(){
    if(meuPinguim.podeVoar) console.log("Eu posso voar!");
    else console.log("Nao posso voar!");
}
meuPinguim.fly();

for(let i in meuPinguim){
    console.log("Propriedades: "+meuPinguim[i]);
}

