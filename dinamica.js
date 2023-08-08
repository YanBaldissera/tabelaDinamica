let linhasTabela = [
    ['GABINETE', ' ', 'DIRETORIA TÉCNICA', ' '],
    ['Gabriel ', '6927', 'Dener ', '6930'],
    ['Bruna ', '6928', 'Anne', '6970'],
    ['', '', '', ''],
    ['DIRAF', '', 'DIVFC - OBRAS', ''],
    ['Rodrigo', '48494', 'Daniel', '5454'],
    ['', '', 'Eliza ', '6945'],
    ['AJ - JURÍDICO', '', 'Glauco', '6938'],
    ['Felipe ', '8494', 'Luiz ', '4849'],
    ['', '', '', ''],
    ['DEPAF - FINANCEIRO', '', 'DPLAN - PLANEJAMENTO', ''],
    ['jurandir ', '8494', 'Milena', '84944'],
    ['', '', 'Raul ', '8494'],
    ['TRANSPORTE', '', 'Ricardo ', '8494'],
    ['Faria', '8944', 'Ruan ', '8494'],
    [' Maria ', '8944', 'Matheus ', '5464'],
    [' Becker', '8956', '', ''],
    ['', '', 'fatima', '4546'],
    ['RH', '', 'hulk ', '8494'],
    ['Marcia  ', '84946', '', ''],
    ['Souza', '8944', 'DI', ''],
    ['', '', 'Carla ', '5649'],
    ['GAS', '', 'vagner  ', '5697'],
    ['  Aparecida ', '5689', 'Estagiários', '6967'],
    ['Kauane ', '5655', 'Marcos    ', '6960'],
    ['', '', '', ''],
    ['GTI - INFORMÁTICA', '', '', ''],
    ['Caio  da  ', '8956', '', ''],
    ['', '', '', ''],
    ['PTG - PROTOCOLO', '', '', ''],
    ['   Lima', '8596', '', ''],
    ['', '', '', ''],
    ['CONTABILIDADE', '', '', ''],
    ['  Ferreira', '2588', '', '']
];

let listaNegrito = ['GABINETE', 'DIRAF', 'DIRETORIA TÉCNICA', 'AJ - JURÍDICO', 'DIVFC - OBRAS', 'PTG - PROTOCOLO',
'DEPAF - FINANCEIRO', 'DPLAN - PLANEJAMENTO', 'TRANSPORTE', 'DCOT', 'RH', 'DI', 'GAS','GTI - INFORMÁTICA', 'CONTABILIDADE'];

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

// Passando pelos elementos dos arrays
for (let i = 0; i < linhasTabela.length; i++) {
    let linhaBody = criaElemento("tr");
    linhaBody.appendChild(criaCelula("td", i + 1));

    if (i % 2 == 0) {
        linhaBody.setAttribute("class", "listrado");
    }
    for (let j = 0; j < indicesTabela.length - 1; j++) { //é subtraido 2 do tamanho da tabela, por causa da coluna indice e
        if (j == 2){                                    //da coluna vazia (que foram automatizadas), assim só alteramos a coluna nome e ramal
            let celVazia = criaCelula("td", " ");
            linhaBody.appendChild(celVazia);
        }
        else if(j > 2){
            let texto = criaCelula("td", linhasTabela[i][j -1]);
            linhaBody.appendChild(texto);
            
            if(listaNegrito.includes(linhasTabela[i][j -1])){
                texto.style.fontWeight = 'bold';
            }
        }
        else{
            let texto = criaCelula("td", linhasTabela[i][j]);
            linhaBody.appendChild(texto);
           
            if(listaNegrito.includes(linhasTabela[i][j])){
                texto.style.fontWeight = 'bold';
            }
        }
    }
    tbody.appendChild(linhaBody);
}

let linhaFoot = criaElemento("tr");
let celulaFoot = criaCelula("td","Tfox");
celulaFoot.setAttribute("colspan", 6);
linhaFoot.appendChild(celulaFoot);
tfoot.appendChild(linhaFoot);

tabela.appendChild(thead);
tabela.appendChild(tbody);
tabela.appendChild(tfoot);