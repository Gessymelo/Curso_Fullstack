const notas = [8.00 , 9.00, 10.00];

console.log(`A primeira nota è: ${notas[0]}`);
console.log(`A segunda nota è: ${notas[1]}`);
console.log(`A terceira nota è: ${notas[2]}`);


var media = (notas[0]+notas[1]+ notas[2])/notas.length;

// o toFixed  è para acresantar quantidade de casas decimais
console.log(`A media do aluno è: ${media.toFixed(2)}`);