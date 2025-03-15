let amigos = []; 

function adicionarAmigo() {
    let campo = document.getElementById("nomeAmigo"); 
    let nome = campo.value.trim(); 

    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome); 
    atualizarLista(); 
    campo.value = ""; 
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    document.getElementById("resultadoSorteio").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
