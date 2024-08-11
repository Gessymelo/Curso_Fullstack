//Define um array chamado temp quer armazena 4 temperaturas em Celcios
const temp = [25 , 30, 15, 20];

//imprime todas as tempreaturas do array
console.log(`As temperaturas armazenas sao : ${temp}`);

//sortea uma das temperaturas do array
const tempAleatoria = temp[Math.floor(Math.random()*temp.length)];

//converte a temperatura
var Fahrenheit = (tempAleatoria*9/5)+32;

//imprime a a temperaturas e sua conversao 
console.log(`à temperatura sorteada esta: ${tempAleatoria} C, que correponde a ${Fahrenheit} F`);