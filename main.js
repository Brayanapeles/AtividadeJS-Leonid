"use strict"

//      METODOS PARA MANIPULAÇÃO DE OBJETOS DO DOM 
//document.getElementById("total").innerText = "SENAI";
//document.querySelector("#total").innerText = "Query";

const distancia = document.getElementById("distancia");

const Qtdpedagios = document.getElementById("pedagios");

const calcular = document.getElementById("calcular");

const pedagio = document.getElementById("pedagio");

const total = document.getElementById("total");


function botaoCalcular () {
    const valorPedagio = 9.40;
    const resultadoPedagio = Number (Qtdpedagios.value) * valorPedagio;
    pedagio.innerText = resultadoPedagio.toFixed(2);

    const valorKilometro = 6.00;
    const resultadoKm =  Number(distancia.value) * valorKilometro;

    const valorTotal =   resultadoPedagio + resultadoKm;  
    total.innerText = valorTotal.toFixed(2);
}

calcular.addEventListener('click', botaoCalcular);
