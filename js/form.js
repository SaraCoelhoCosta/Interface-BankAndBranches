// Criar 
function createCity() {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const id = document.getElementById("id").value;
        const nome = document.getElementById("nome").value;

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: id,
                nome: nome,
            }),
        };

        fetch("http://localhost:8000/cidades", requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    });
}

// Atualizar 
function updateCity() {
    const id = document.getElementById("id").value;
    const nome = document.getElementById("nome").value;

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: id,
            nome: nome,
        })
    };

    fetch(`http://localhost:8000/cidades/${id}`, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

// Carregar dados
function loadCity() {
    // const urlParams = new URLSearchParams(window.location.search);
    const cidadeId = 15 //urlParams.get('id');

    fetch(`http://localhost:8000/cidades/${cidadeId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("id").value = data.id;
            document.getElementById("nome").value = data.nome;
        })
        .catch(error => console.error(error));
}
