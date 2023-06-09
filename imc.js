
/* 
Resultado abaixo de 17 - Muito abaixo do peso; <br>
Resultado entre 17 e 18,49 - Abaixo do peso; <br>
Resultado entre 18,5 e 24,99 - Peso ideal; <br>
Resultado entre 25 e 29,99 - Sobrepeso; <br>
Resultado entre 30 e 34,9 - Obesidade grau I; <br>
Resultado entre 35 e 39,9 - Obesidade grau II (severa); <br>
Resultado acima de 40 - Obesidade grau III (mórbida); <br></br>
*/

var nome = [];
var altura = [];
var peso = [];
var imc = [];
var resultado = [];

function calcular(event){
    event.preventDefault();

    nome[0] = document.getElementById("nome1").value;
    peso[0] = parseFloat(document.getElementById("peso1").value);
    altura[0] = parseFloat(document.getElementById("altura1").value);

    imc[0] = peso[0] / (altura[0] * altura[0]);
    resultado[0] = document.getElementById("resultado1");

    if (imc[0] < 17 ) {
        resultado[0].innerHTML = "<br/> Olá " + nome[0] + "! Seu resultado foi: " + imc[0].toFixed(2) + "<br/> Cuidado você está muito abaixo do peso!";
    } else if (imc[0] > 17 && imc[0] <= 18.49) {
        resultado[0].innerHTML = "<br/> Olá " + nome[0] + "! Seu resultado foi: " + imc[0].toFixed(2) + "<br/> Abaixo do peso!";
    } else if (imc[0] > 18.5 && imc[0] <= 24.99) {
        resultado[0].innerHTML = "<br/> Olá " + nome[0] + "! Seu resultado foi: "  + imc[0].toFixed(2) + "<br/> Você está no peso ideal!";
    } else if (imc[0] > 25 && imc[0] <= 29.99) {
        resultado[0].innerHTML = "<br/> Olá " + nome[0] + "! Seu resultado foi: "  + imc[0].toFixed(2) + "<br/> Você está com sobre peso!";
    } else if (imc[0] > 30 && imc[0] <= 34.99) {
        resultado[0].innerHTML = "<br/> Olá " + nome[0] + "! Seu resultado foi: "  + imc[0].toFixed(2) + "<br/> CUIDADO, obesidade grau I!";
    } else if (imc[0] > 35 && imc[0] <= 39.99) {
        resultado[0].innerHTML = "<br/> Olá " + nome[0] + "! Seu resultado foi: "  + imc[0].toFixed(2) + "<br/> CUIDADO, obesidade grau II!";
    } else if (imc[0] > 40) {
        resultado[0].innerHTML = "<br/> Olá " + nome[0] + "! Seu resultado foi: "  + imc[0].toFixed(2) + "<br/> CUIDADO, obesidade grau III!";
    }

    document.getElementById("nome1").value = "";
    document.getElementById("peso1").value = "";
    document.getElementById("altura1").value = "";


    // Código de calculo da segunda pessoa_________________________________________________________________

    nome[1] = document.getElementById("nome2").value;
    peso[1] = parseFloat(document.getElementById("peso2").value);
    altura[1] = parseFloat(document.getElementById("altura2").value);

    imc[1] = peso[1] / (altura[1] * altura[1]);
    resultado[1] = document.getElementById("resultado2");

    if (imc[1] < 17 ) {
        resultado[1].innerHTML = "<br/> Olá " + nome[1] + "! Seu resultado foi: " + imc[1].toFixed(2) + "<br/> Cuidado você está muito abaixo do peso!";
    } else if (imc[1] > 17 && imc[1] <= 18.49) {
        resultado[1].innerHTML = "<br/> Olá " + nome[1] + "! Seu resultado foi: " + imc[1].toFixed(2) + "<br/> Abaixo do peso!";
    } else if (imc[1] > 18.5 && imc[1] <= 24.99) {
        resultado[1].innerHTML = "<br/> Olá " + nome[1] + "! Seu resultado foi: "  + imc[1].toFixed(2) + "<br/> Você está no peso ideal!";
    } else if (imc[1] > 25 && imc[1] <= 29.99) {
        resultado[1].innerHTML = "<br/> Olá " + nome[1] + "! Seu resultado foi: "  + imc[1].toFixed(2) + "<br/> Você está com sobre peso!";
    } else if (imc[1] > 30 && imc[1] <= 34.99) {
        resultado[1].innerHTML = "<br/> Olá " + nome[1] + "! Seu resultado foi: "  + imc[1].toFixed(2) + "<br/> CUIDADO, obesidade grau I!";
    } else if (imc[1] > 35 && imc[1] <= 39.99) {
        resultado[1].innerHTML = "<br/> Olá " + nome[1] + "! Seu resultado foi: "  + imc[1].toFixed(2) + "<br/> CUIDADO, obesidade grau II!";
    } else if (imc[1] > 40) {
        resultado[1].innerHTML = "<br/> Olá " + nome[1] + "! Seu resultado foi: "  + imc[1].toFixed(2) + "<br/> CUIDADO, obesidade grau III!";
    }

    document.getElementById("nome2").value = "";
    document.getElementById("peso2").value = "";
    document.getElementById("altura2").value = "";


     // Código de calculo da terceira pessoa_________________________________________________________________

     nome[2] = document.getElementById("nome3").value;
     peso[2] = parseFloat(document.getElementById("peso3").value);
     altura[2] = parseFloat(document.getElementById("altura3").value);
 
     imc[2] = peso[2] / (altura[2] * altura[2]);
     resultado[2] = document.getElementById("resultado3");
 
     if (imc[2] < 17 ) {
        resultado[2].innerHTML = "<br/> Olá " + nome[2] + "! Seu resultado foi: " + imc[2].toFixed(2) + "<br/> Cuidado você está muito abaixo do peso!";
     } else if (imc[2] > 17 && imc[2] <= 18.49) {
        resultado[2].innerHTML = "<br/> Olá " + nome[2] + "! Seu resultado foi: " + imc[2].toFixed(2) + "<br/> Abaixo do peso!";
     } else if (imc[2] > 18.5 && imc[2] <= 24.99) {
        resultado[2].innerHTML = "<br/> Olá " + nome[2] + "! Seu resultado foi: "  + imc[2].toFixed(2) + "<br/> Você está no peso ideal!";
     } else if (imc[2] > 25 && imc[2] <= 29.99) {
        resultado[2].innerHTML = "<br/> Olá " + nome[2] + "! Seu resultado foi: "  + imc[2].toFixed(2) + "<br/> Você está com sobre peso!";
     } else if (imc[2] > 30 && imc[2] <= 34.99) {
        resultado[2].innerHTML = "<br/> Olá " + nome[2] + "! Seu resultado foi: "  + imc[2].toFixed(2) + "<br/> CUIDADO, obesidade grau I!";
     } else if (imc[2] > 35 && imc[2] <= 39.99) {
        resultado[2].innerHTML = "<br/> Olá " + nome[2] + "! Seu resultado foi: "  + imc[2].toFixed(2) + "<br/> CUIDADO, obesidade grau II!";
     } else if (imc[2] > 40) {
        resultado[2].innerHTML = "<br/> Olá " + nome[2] + "! Seu resultado foi: "  + imc[2].toFixed(2) + "<br/> CUIDADO, obesidade grau III!";
     }
 
     document.getElementById("nome3").value = "";
     document.getElementById("peso3").value = "";
     document.getElementById("altura3").value = "";

     console.log(resultado[0])
     console.log(resultado[1])
     console.log(resultado[2])
   


}