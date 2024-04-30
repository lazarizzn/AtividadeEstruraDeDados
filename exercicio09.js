const dados = require('./dados');

console.log("Exercicio 09");
console.log("------------------------------");
console.log("função localizarPessoa");
console.log("------------------------------");


const pessoa = dados.localizarPessoa("Renata Barbosa")

if(pessoa){
    console.log(pessoa);
}
else{
    console.log("Aluno não encontrado na lista")
}