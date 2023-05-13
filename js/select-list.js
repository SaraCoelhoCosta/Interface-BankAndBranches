// Puxa os dados da API para listar no ComboBox dos formulários

function listCity() {
    fetch(`http://127.0.0.1:8000/cidades`)
        .then(response => response.json())
        .then(data => {
            // Selecionar o elemento select
            const select = document.querySelector("#cidades");

            // Limpar o elemento select
            select.innerHTML = "";

            // Adicionar uma opção vazia como a primeira opção
            const emptyOption = document.createElement("option");
            emptyOption.value = "";
            emptyOption.textContent = "Selecione uma cidade";
            select.appendChild(emptyOption);

            // Iterar sobre os dados e criar uma opção para cada nome
            data.forEach(item => {
                const option = document.createElement("option");
                option.value = item.id;
                option.textContent = item.nome;
                select.appendChild(option);
            });
        });
}

function listBranch() {
    fetch(`http://127.0.0.1:8000/agencias`)
        .then(response => response.json())
        .then(data => {
            // Selecionar o elemento select
            const select = document.querySelector("#agencias_id");

            // Limpar o elemento select
            select.innerHTML = "";

            // Adicionar uma opção vazia como a primeira opção
            const emptyOption = document.createElement("option");
            emptyOption.value = "";
            emptyOption.textContent = "Selecione uma agência";
            select.appendChild(emptyOption);

            // Iterar sobre os dados e criar uma opção para cada nome
            data.forEach(item => {
                const option = document.createElement("option");
                option.value = item.id;
                option.textContent = item.descricao;
                select.appendChild(option);
            });
        });
}

function listAccount() {
    fetch(`http://127.0.0.1:8000/contas`)
        .then(response => response.json())
        .then(data => {
            // Selecionar o elemento select
            const select = document.querySelector("#tipo_contas");

            // Limpar o elemento select
            select.innerHTML = "";

            // Adicionar uma opção vazia como a primeira opção
            const emptyOption = document.createElement("option");
            emptyOption.value = "";
            emptyOption.textContent = "Selecione um tipo de conta";
            select.appendChild(emptyOption);

            // Iterar sobre os dados e criar uma opção para cada nome
            data.forEach(item => {
                const option = document.createElement("option");
                option.value = item.id;
                option.textContent = item.tipo_conta;
                select.appendChild(option);
            });
        });
}