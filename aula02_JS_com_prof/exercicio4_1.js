let aluno ={
    nome:"maria",
    cpf:"456.845.626-79",
    cidade:"Sao Paulo",
    notas:[8.5,7.2,9.0,6.8]
};

console.log( `cidade ${aluno.nome}` );

//imprimir notas
console.log (`nota 1 = ${aluno.notas[0]}`);

//calculo da media

const media = (aluno.notas[0]+aluno.notas[1]+aluno.notas[2]+aluno.notas[3])/aluno.notas.length;

//nota aleatoria

const notaAleatoria = aluno.notas[Math.floor(Math.random()*aluno.notas.length)];

//converter
const notaConvertida = notaAleatoria * 10;



console.log (`nota sorteada: ${notaAleatoria} e convertida a media para escala de  0 -100 è:  ${notaConvertida}`);

