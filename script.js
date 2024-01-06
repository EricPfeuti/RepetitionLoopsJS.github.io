function potenciaWhile(){
    let n1=parseInt(document.getElementById("N1").value);
    let n2=parseInt(document.getElementById("N2").value);
    let i= 1;
    let resultado= 1;

    while (i <= n2){
        resultado = resultado*n1;
        (i++);
    }
    document.getElementById("Resultado").innerHTML=
    `O resultado da potência é: ${resultado}`
}
function potenciaDo(){
    let n1=parseInt(document.getElementById("Nu1").value);
    let n2=parseInt(document.getElementById("Nu2").value);
    let i= 1;
    let res=1;
    do{
        res=res*n1;
        i++;
    }while(i <= n2)
    document.getElementById("Resultado1").innerHTML=
    `O resultado da potência é: ${res}`
}
function potenciaFor(){
    let n1=parseInt(document.getElementById("Num1").value);
    let n2=parseInt(document.getElementById("Num2").value);
    let res= 1;
    for(let i=1;i<=n2;i++){
        res=res*n1;
    }
    document.getElementById("Resultado2").innerHTML=
    `O resultado da potência é: ${res}`
}