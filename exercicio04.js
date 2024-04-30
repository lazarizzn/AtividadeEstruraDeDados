const dados = require('./dados');

console.log("Exercicio 04");
console.log("------------------------------");
console.log("média de número de filhos");
console.log("------------------------------");

let someMedia = 0;
let somaIdade = 0;

for(let i = 0; i < dados.pesquisaIBGE.length; i++){
    console.log("-------------------------------------------------------");
    console.log(dados.pesquisaIBGE[i].nome+ 
        ' -  Idades: '+dados.pesquisaIBGE[i].idade+' - Filhos: '+dados.pesquisaIBGE[i].filhos);


        someMedia = someMedia + dados.pesquisaIBGE[i].filhos;

        somaIdade = somaIdade + dados.pesquisaIBGE[i].idade;

    }
    console.log("-------------------------------------------------------");
    console.log("A media total de filhos: ", someMedia / dados.pesquisaIBGE.length)
    console.log("-------------------------------------------------------");
    console.log("A media total de Idades: ", somaIdade / dados.pesquisaIBGE.length)

   