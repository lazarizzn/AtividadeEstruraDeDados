const dados = require('./dados');

console.log("Exercicio 02");
console.log("------------------------------");
console.log("Idade e número de filhos");
console.log("------------------------------");

for(let i = 0; i < dados.pesquisaIBGE.length; i++){
    console.log(dados.pesquisaIBGE[i].nome+ 
        ' -  Idades: '+dados.pesquisaIBGE[i].idade+' - Filhos: '+dados.pesquisaIBGE[i].filhos);
        console.log("------------------------------");
    }