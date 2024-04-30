const dados = require('./dados');

console.log("Exercicio 05");
console.log("------------------------------");
console.log("idade e no final exiba a média denúmero de filhos");
console.log("------------------------------");

let someMedia = 0;


for(let i = 0; i < dados.pesquisaIBGE.length; i++){
    console.log("-------------------------------------------------------");
    console.log(dados.pesquisaIBGE[i].nome+ 
        ' -  Idades: '+dados.pesquisaIBGE[i].idade+' - Filhos: '+dados.pesquisaIBGE[i].filhos+' - Salario: '+dados.pesquisaIBGE[i].salario);


        someMedia = someMedia + dados.pesquisaIBGE[i].salario;


    }
    console.log("-------------------------------------------------------");
    console.log("A media total de salario: ", someMedia / dados.pesquisaIBGE.length)
    console.log("-------------------------------------------------------");


   