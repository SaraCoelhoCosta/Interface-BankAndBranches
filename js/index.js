fetch(`http://127.0.0.1:8000/cidades`)
.then(response => response.json())
.then(data => {
    const tableBody = document.querySelector("#dados tbody");
    data.forEach(item => {
        const row = document.createElement("tr");
        row.classList.add("active-row");
        const idCell = document.createElement("td");
        idCell.textContent = item.id;
        const nomeCell = document.createElement("td");
        nomeCell.textContent = item.nome;
        row.appendChild(idCell);
            row.appendChild(nomeCell);
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error(error));