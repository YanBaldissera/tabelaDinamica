let linhasTabela = [
    ['Yan Benck Baldissera', '6982', ' ', 'jose', '9982'],
    ['kauan', '6761', ' ', 'Caio', '6726'],
    ['', '', '', 'Pontos vesgo amelio', '2762'],
    ['kauan', '1212', '', '', ''],
    ['vasco', '3453', ' ', 'Lucas', '8181'],
    ['Lucas', '1717', ' ', 'Carlos', '1717'],
    ['vasquez', '5621', ' ', 'manoel', '2324']
];

function criaElemento(elemento) {
    return document.createElement(elemento);
}


//seleciona a section
/*let titulo = document.querySelector("section h1");
titulo.textContent = "RAMAIS";*/

//seleciona o id da tabela
let tabela = document.getElementById("tabela");

//criando as tags para funcionar dinamicamente
let thead = criaElemento("thead");
let tbody = criaElemento("tbody");
let tfoot = criaElemento("tfoot");


let indicesTabela = ["Indice", "Nome", "Ramal", " ", "Nome", "Ramal"];

let linhaHead = criaElemento("tr");

//cria uma linha
function criaCelula(tag, text) {
    tag = criaElemento(tag);
    tag.textContent = text;
    return tag;
}

//criando a linha
for (let i = 0; i < indicesTabela.length; i++) {
    let th = criaCelula("th", indicesTabela[i]);
    linhaHead.appendChild(th);
}
thead.appendChild(linhaHead);

//Passando pelos elementos dos arrays
for (let i = 0; i < linhasTabela.length; i++) {
    //console.log(linhasTabela[i]);
    let linhaBody = criaElemento("tr");
    linhaBody.appendChild(criaCelula("td", i + 1));
    if (i % 2 == 0) {
        linhaBody.setAttribute("class", "listrado");
    }
    for (let j = 0; j < linhasTabela[i].length; j++) {
        //console.log(linhasTabela[i][j]);
        let cel = criaCelula("td", linhasTabela[i][j]);
        linhaBody.appendChild(cel);
    }
    tbody.appendChild(linhaBody);
}

let linhaFoot = criaElemento("tr");
let celulaFoot = criaCelula("td","AMEP");
celulaFoot.setAttribute("colspan", 6);
linhaFoot.appendChild(celulaFoot);
tfoot.appendChild(linhaFoot);

tabela.appendChild(thead);
tabela.appendChild(tbody);
tabela.appendChild(tfoot);