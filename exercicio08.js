const dados = require('./dados');

console.log("Exercicio 08");
console.log("------------------------------");
console.log("Quantidade pessoas de cada sexo por cidade");
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

let Femininomarilia = [];
let Masculinomarilia = [];

for(const Masculinoefeminino of Marília){
    if (Masculinoefeminino.sexo == 'Feminino'){
        Femininomarilia.push(Masculinoefeminino);
    }

       }     
for(const Masculinoefeminino of Marília){
    if (Masculinoefeminino.sexo == 'Masculino'){
        Masculinomarilia.push(Masculinoefeminino);
    }
        
}

console.log("Pessoas do sexo feminino: "+Femininomarilia.length)
console.log("Pessoas do sexo Masculino: "+Masculinomarilia.length)


console.log("----------------------------------------------");
console.log("Cidade de Garça");
console.log("----------------------------------------------");

let FemininoGarça = [];
let MasculinoGarça = [];

for(const Masculinoefeminino of Garça){
    if (Masculinoefeminino.sexo == 'Feminino'){
        FemininoGarça.push(Masculinoefeminino);
    }

       }     
for(const Masculinoefeminino of Garça){
    if (Masculinoefeminino.sexo == 'Masculino'){
        MasculinoGarça.push(Masculinoefeminino);
    }
        
}

console.log("Pessoas do sexo feminino: "+FemininoGarça.length)
console.log("Pessoas do sexo Masculino: "+MasculinoGarça.length)

console.log("----------------------------------------------");
console.log("Cidade de Ourinhos");
console.log("----------------------------------------------");

let FemininoOurinhos = [];
let MasculinoOurinhos = [];

for(const Masculinoefeminino of Ourinhos){
    if (Masculinoefeminino.sexo == 'Feminino'){
        FemininoOurinhos.push(Masculinoefeminino);
    }

       }     
for(const Masculinoefeminino of Ourinhos){
    if (Masculinoefeminino.sexo == 'Masculino'){
        MasculinoOurinhos.push(Masculinoefeminino);
    }
        
}

console.log("Pessoas do sexo feminino: "+FemininoOurinhos.length)
console.log("Pessoas do sexo Masculino: "+MasculinoOurinhos.length)

console.log("----------------------------------------------");
console.log("Cidade de Assis");
console.log("----------------------------------------------");

let FemininoAssis = [];
let MasculinoAssis = [];

for(const Masculinoefeminino of Assis){
    if (Masculinoefeminino.sexo == 'Feminino'){
        FemininoAssis.push(Masculinoefeminino);
    }

       }     
for(const Masculinoefeminino of Assis){
    if (Masculinoefeminino.sexo == 'Masculino'){
        MasculinoAssis.push(Masculinoefeminino);
    }
        
}

console.log("Pessoas do sexo feminino: "+FemininoAssis.length)
console.log("Pessoas do sexo Masculino: "+MasculinoAssis.length)

console.log("----------------------------------------------");
console.log("Cidade de Bauru");
console.log("----------------------------------------------");

let FemininoBauru = [];
let MasculinoBauru = [];

for(const Masculinoefeminino of Bauru){
    if (Masculinoefeminino.sexo == 'Feminino'){
        FemininoBauru.push(Masculinoefeminino);
    }

       }     
for(const Masculinoefeminino of Bauru){
    if (Masculinoefeminino.sexo == 'Masculino'){
        MasculinoBauru.push(Masculinoefeminino);
    }
        
}

console.log("Pessoas do sexo feminino: "+FemininoBauru.length)
console.log("Pessoas do sexo Masculino: "+MasculinoBauru.length)

