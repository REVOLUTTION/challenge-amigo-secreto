// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Agregar amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue ingresado.");
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

// Actualizar la lista en la interfaz
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Realizar el sorteo de un solo amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debes tener al menos un amigo para realizar el sorteo.");
        return;
    }
    
    let elegido = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(elegido);
}

// Mostrar el resultado en la interfaz
function mostrarResultado(elegido) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    let li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${elegido}`;
    resultado.appendChild(li);
}
