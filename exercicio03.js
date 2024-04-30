const dados = require('./dados');

console.log("Exercicio 03");
console.log("------------------------------");
console.log("média denúmero de filhos");
console.log("------------------------------");

let someMedia = 0;

for(let i = 0; i < dados.pesquisaIBGE.length; i++){
    console.log("-------------------------------------------------------");
    console.log(dados.pesquisaIBGE[i].nome+ 
        ' -  Idades: '+dados.pesquisaIBGE[i].idade+' - Filhos: '+dados.pesquisaIBGE[i].filhos);


        someMedia = someMedia + dados.pesquisaIBGE[i].filhos;

    }
    console.log("-------------------------------------------------------");
     console.log("A media total de filhos: ", someMedia / dados.pesquisaIBGE.length)

   