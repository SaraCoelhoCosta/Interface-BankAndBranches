// Listar tudo
function listCity() {
    fetch(`http://127.0.0.1:8000/cidades`)
.then(response => response.json())
.then(data => {
    const tableBody = document.querySelector("#dados tbody");
    data.forEach(item => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        idCell.textContent = item.id;
        const nomeCell = document.createElement("td");
        nomeCell.textContent = item.nome;
        const actionsCell = document.createElement("td"); // Célula para os botões
        const editButton = document.createElement("button"); // Botão de Editar
        
        editButton.textContent = "Editar";
        editButton.addEventListener("click", () => {
            // Adicione aqui a lógica para editar o item selecionado
            console.log(`Editar ${item.id} - ${item.nome}`);
        });

        const space = document.createElement("span");
        space.textContent = " ";
        
        const deleteButton = document.createElement("button"); // Botão de Excluir
        deleteButton.textContent = "Excluir";
        deleteButton.addEventListener("click", () => {
            // Adicione aqui a lógica para excluir o item selecionado
            console.log(`Excluir ${item.id} - ${item.nome}`);
        });
        
        actionsCell.appendChild(editButton);
        actionsCell.appendChild(space);
        // actionsCell.appendChild(document.createElement("br")); // Adiciona uma quebra de linha
        actionsCell.appendChild(deleteButton);
        row.appendChild(idCell);
        row.appendChild(nomeCell);
        row.appendChild(actionsCell); // Adiciona a célula dos botões na linha
        tableBody.appendChild(row);
           
        });
    })
    .catch(error => console.error(error));
}

listCity();