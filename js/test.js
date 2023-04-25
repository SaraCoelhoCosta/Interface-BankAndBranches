/* 
* GET
*/

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
        row.appendChild(idCell);
            row.appendChild(nomeCell);
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error(error));

/* 
 * GET ID
 */
   
const id = 2
fetch(`http://127.0.0.1:8000/cidades/${id}`)
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector("#dados tbody");
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        idCell.textContent = data.id;
        const nomeCell = document.createElement("td");
        nomeCell.textContent = data.nome;
        row.appendChild(idCell);
        row.appendChild(nomeCell);
        tableBody.appendChild(row);
    })
    .catch(error => console.error(error));

/* 
 * POST
 */

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        "id": 12,
        "nome": "Goiania"
    })
};

fetch('http://localhost:8000/cidades', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

/* 
 * PUT
 */

const id2 = 11
const requestOptions2 = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        "id": id2,
        "nome": "Morro de Sao Paulo"
    })
};

fetch(`http://127.0.0.1:8000/cidades/${id2}`, requestOptions2)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

/* 
 * DELETE
 */
const cidadeId = 11; // ID da cidade a ser removida

fetch(`http://127.0.0.1:8000/cidades/${cidadeId}`, {
    method: 'DELETE',
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao tentar remover cidade');
        }
        console.log('Cidade removida com sucesso');
    })
    .catch(error => console.error(error));
