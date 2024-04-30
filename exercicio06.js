const dados = require('./dados');

console.log("Exercicio 06");
console.log("------------------------------");
console.log("Pessoas com nome e salario por cidade");
console.log("------------------------------");


let Marília = [];
let Garça = [];
let Ourinhos = [];
let Assis = [];
let Bauru = []


for(const cidades of dados.pesquisaIBGE){
    if (cidades.cidade == 'Marília'){
        Marília.push(cidades);
    }
}
for(const cidades of dados.pesquisaIBGE){
    if (cidades.cidade == 'Garça'){
        Garça.push(cidades);
    }
}
for(const cidades of dados.pesquisaIBGE){
    if (cidades.cidade == 'Ourinhos'){
        Ourinhos.push(cidades);
    }
}
for(const cidades of dados.pesquisaIBGE){
    if (cidades.cidade == 'Assis'){
        Assis.push(cidades);
    }
}
for(const cidades of dados.pesquisaIBGE){
    if (cidades.cidade == 'Bauru'){
        Bauru.push(cidades);
    }
}

console.log("----------------------------------------------");
console.log("Cidade de Marília");
console.log("----------------------------------------------");
for(const cidades of Marília){

        console.log(cidades.nome+' - Salario: '+cidades.salario);

    }
    console.log("----------------------------------------------");
    console.log("Cidade de Garça");
    console.log("----------------------------------------------");
for(const cidades of Garça){
    
         console.log(cidades.nome+' - Salario: '+cidades.salario);
    
    }
    console.log("----------------------------------------------");
    console.log("Cidade de Ourinhos");
    console.log("----------------------------------------------");
for(const cidades of Ourinhos){
    
         console.log(cidades.nome+' - Salario: '+cidades.salario);
    
    }
    console.log("----------------------------------------------");
    console.log("Cidade de Assis");
    console.log("----------------------------------------------");
for(const cidades of Assis){
    
         console.log(cidades.nome+' - Salario: '+cidades.salario);
    
    }
    console.log("----------------------------------------------");
    console.log("Cidade de Bauru");
    console.log("----------------------------------------------");
for(const cidades of Bauru){
    
         console.log(cidades.nome+' - Salario: '+cidades.salario);
    
    }

        