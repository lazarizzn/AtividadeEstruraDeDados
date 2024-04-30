const dados = require('./dados');

console.log("Exercicio 07");
console.log("------------------------------");
console.log("Pessoas com nome e salario por Sexo");
console.log("------------------------------");

let Masculino = [];
let Feminino = [];

for(const Masculinoefeminino of dados.pesquisaIBGE){
    if (Masculinoefeminino.sexo == 'Masculino'){
        Masculino.push(Masculinoefeminino);
    }
}
for(const Masculinoefeminino of dados.pesquisaIBGE){
    if (Masculinoefeminino.sexo == 'Feminino'){
        Feminino.push(Masculinoefeminino);
    }
}

console.log("----------------------------------------------");
console.log("Sexo Masculino");
console.log("----------------------------------------------");
for(const Masculinoefeminino of Masculino){

        console.log(Masculinoefeminino.nome+' - Salario: '+Masculinoefeminino.salario);

    }
    console.log("----------------------------------------------");
    console.log("Sexo Feminino");
    console.log("----------------------------------------------");
for(const Masculinoefeminino of Feminino){
    
         console.log(Masculinoefeminino.nome+' - Salario: '+Masculinoefeminino.salario);
    
    }