// Listar tudo
function listBranch() {
    fetch(`http://127.0.0.1:8000/agencias`)
        .then(response => response.json())
        .then(data => {
            // Selecionar o corpo da tabela
            const tableBody = document.querySelector("#branch-table tbody");

            // Iterar sobre os dados e criar linhas na tabela
            data.forEach(item => {
                const row = document.createElement("tr");
                row.classList.add("border-b", "dark:border-gray-700");
                const idCell = document.createElement("th");
                idCell.classList.add("px-4", "py-3", "font-medium", "text-gray-900", "whitespace-nowrap", "dark:text-white");
                idCell.textContent = item.id;
                const descricaoCell = document.createElement("td");
                descricaoCell.classList.add("px-4", "py-3");
                descricaoCell.textContent = item.descricao;
                const sedeCell = document.createElement("td");
                sedeCell.classList.add("px-4", "py-3");
                sedeCell.textContent = item.sede;
                const buttonsCell = document.createElement("td");
                buttonsCell.classList.add("px-4", "py-3");
                const buttonGroup = document.createElement("div");


                const editIcon = document.createElement("svg");
                editIcon.classList.add("w-5", "h-5", "mr-1", "text-white");
                editIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="None" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill-rule="evenodd" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>';

                const editButton = document.createElement("button");
                //editButton.textContent = "Editar";
                editButton.style.marginRight = "5px"; // Espaço entre botões
                editButton.classList.add("inline-flex", "w-full", "items-center", "text-white", "justify-center", "bg-blue-700", "hover:bg-blue-800", "focus:ring-4", "focus:outline-none", "focus:ring-blue-300", "font-medium", "rounded-lg", "text-sm", "py-2", "text-center", "dark:bg-blue-600", "dark:hover:bg-blue-700", "dark:focus:ring-blue-800"); // adiciona as classes "btn" e "btn-blue" ao botão

                editButton.addEventListener("click", () => {
                    window.location.href = `../../components/forms/form-branch.html?id=${item.id}`;
                });
                editButton.appendChild(editIcon);


                const deleteIcon = document.createElement("svg");
                deleteIcon.classList.add("w-5", "h-5", "mr-1", "text-white");
                deleteIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="None" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill-rule="evenodd" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>';

                const deleteButton = document.createElement("button");
                // deleteButton.textContent = "Excluir";
                deleteButton.classList.add("inline-flex", "w-full", "items-center", "text-white", "justify-center", "bg-red-600", "hover:bg-red-700", "focus:ring-4", "focus:outline-none", "focus:ring-red-300", "font-medium", "rounded-lg", "text-sm", "py-2", "text-center", "dark:bg-red-500", "dark:hover:bg-red-600", "dark:focus:ring-red-900"); // adiciona as classes "btn" e "btn-blue" ao botão

                deleteButton.addEventListener("click", () => {
                    deleteBranch(item.id);
                    // console.log(`Excluir ${item.id} - ${item.nome}`);
                });
                deleteButton.appendChild(deleteIcon);

                // Adicionar botões à célula da tabela
                buttonGroup.style.display = "flex"; // exibe os botões em uma linha
                buttonGroup.appendChild(editButton);
                buttonGroup.appendChild(deleteButton);
                buttonsCell.appendChild(buttonGroup);

                // Adicionar células à linha da tabela
                row.appendChild(idCell);
                row.appendChild(descricaoCell);
                row.appendChild(sedeCell);
                row.appendChild(buttonsCell);

                // Adicionar linha à tabela
                tableBody.appendChild(row);
            });
        });
};

function deleteBranch(id) {
    fetch(`http://127.0.0.1:8000/agencias/${id}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao tentar remover agência');
            }
            console.log('Agência removida com sucesso');
            location.reload();
        })
        .catch(error => console.error(error));
};

// Carregar dados
function loadBranch() {
    const urlParams = new URLSearchParams(window.location.search);
    const branchId = urlParams.get('id');
    if (branchId != null) {
        fetch(`http://localhost:8000/agencias/${branchId}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("id").value = data.id;
                document.getElementById("descricao").value = data.descricao;
                document.getElementById("sede").value = data.sede;
                document.getElementById("cidades_id").value = data.cidades_id;
            })
            .catch(error => console.error(error));
    }
};

function saveBranch() {
    const urlParams = new URLSearchParams(window.location.search);
    const branchId = urlParams.get('id');

    if (branchId != null) {
        const form = document.querySelector('#branch-form');
        const formData = new FormData(form);
        const value = Object.fromEntries(formData.entries());
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(value)
        };

        fetch(`http://127.0.0.1:8000/agencias/${branchId}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                location.reload();
            })
            .catch(error => console.error(error));

    }
    else {
        const form = document.querySelector('#branch-form');
        const formData = new FormData(form);
        const value = Object.fromEntries(formData.entries());
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(value)
        };
        fetch(`http://127.0.0.1:8000/agencias`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.location.href = '../../components/tables/table-branch.html';
            })
            .catch(error => console.error(error));
    }
};