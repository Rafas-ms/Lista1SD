let num = [2,3,4,5,6];
function quadrado(num){
    quad = 0;
    for(let i=0; i<num.length; i++){
        quad = num[i]**2;
        console.log(quad);
    }
}

quadrado(num);