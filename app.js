let listaAmigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim();
    const listaElement = document.getElementById("listaAmigos");

    if (nome === "") {
        alert("Por favor, digite um nome antes de adicionar!");
        return;
    }

    listaAmigos.push(nome);
    
    const listItem = document.createElement("li");
    listItem.textContent = nome;
    listaElement.appendChild(listItem);

    inputAmigo.value = "";
    inputAmigo.focus();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione nomes antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const nomeSorteado = listaAmigos[indiceSorteado];
    
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>🎉 Amigo sorteado: <strong>${nomeSorteado}</strong> 🎉</li>`;
}

