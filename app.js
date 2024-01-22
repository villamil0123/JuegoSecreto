let numeroSecreto = 0;
let contador_intentos=1;
let listaIntentos = [];
let numeroMaximo = 10;
console.log(numeroSecreto);
function AsignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = (texto);
    return;
}

function verificar_evento() {
 let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);
 console.log(contador_intentos);

 if(numeroDeUsuario === numeroSecreto){
    AsignarTextoElemento('p',`GANASTE. Acertaste el  numero en ${contador_intentos} ${(contador_intentos == 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
 }else{
    if (numeroDeUsuario>numeroSecreto) {
     AsignarTextoElemento('p','El numeron es menor');
 } else {
    AsignarTextoElemento('p','El numero es mayor');
 }
 limpiar_caja();
 contador_intentos++;
}
 return;
}

function condiciones_iniciales() {
    AsignarTextoElemento('h1',"Juego del numero secreto");
    AsignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    contador_intentos=1;
}

function limpiar_caja() {
    document.querySelector('#numeroUsuario').value ='';
}

function generarNumeroAleatorio() {
    let numerogenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numerogenerado);
    console.log(listaIntentos);
//Si el numero generado esta influido en la lista
if (listaIntentos.length == numeroMaximo) {
    AsignarTextoElemento('p','Ya se sortearon todos los numeros');
}else{
    if(listaIntentos.includes(numerogenerado)){
return generarNumeroAleatorio();
    }else{
        listaIntentos.push(numerogenerado);
        return numerogenerado;
    }
}
}


function reiniciar_juego() {
  //Limpiar caja y dejarla en blanco
    limpiar_caja();
  //Reiniciar los textos
  //Reiniciar el numero secreto 
  //Reiniciar el numeros de intentos
    condiciones_iniciales();
  //Desactivar el boton de reiniciar  
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condiciones_iniciales();