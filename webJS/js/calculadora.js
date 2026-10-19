function escribir(valor) {
    let pantalla = document.getElementById("pantalla");

    if (pantalla.value === "0" || pantalla.value === "Error") {
        pantalla.value = valor;
    } else {
        pantalla.value += valor;
    }
}

function borrar() {
    let pantalla = document.getElementById("pantalla");
    pantalla.value = "0";
}

function resolver() {
    let pantalla = document.getElementById("pantalla");
    try {
        const expresion = pantalla.value.replace(/,/g, ".");
        pantalla.value = Function(`"use strict"; return (${expresion})`)();
    } catch (error) {
        pantalla.value = "Error";
    }
}