const form = document.querySelector('#insert form'); 
const tabelaBody = document.createElement('tbody'); 
const tabela = document.createElement('table'); 
tabela.appendChild(tabelaBody);
tabela.setAttribute('border', '2');
tabela.setAttribute('width', '100%');

const tableContainer = document.getElementById('table');
tableContainer.innerHTML = ''; 
tableContainer.appendChild(tabela);

let id = 1;

form.addEventListener('submit', function (e) {
    e.preventDefault();

 
    const nomePet = document.getElementById('PetName').value;
    const raca = document.getElementById('PetRace').value;
    const donoPet = document.getElementById('Owner').value;
    const telefone = document.getElementById('Phone').value;


    const linha = document.createElement('tr');

    linha.innerHTML = `
        <td>${id++}</td>
        <td>${nomePet}</td>
        <td>${raca}</td>
        <td>${donoPet}</td>
        <td>${telefone}</td>
        <td class="delete-btn" style="cursor: pointer; text-align: center;">🗑️</td>
    `;

    tabelaBody.appendChild(linha);

    
    linha.querySelector('.delete-btn').addEventListener('click', function () {
        linha.remove();
    });

    form.reset();
});
