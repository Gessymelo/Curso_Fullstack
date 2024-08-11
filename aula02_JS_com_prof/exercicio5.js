const mediaParaAprovacao = 7.0;
//notas do aluno 
let notas = [ 10, 9.0,8.0];

const media=((notas[0]+ notas[1]+notas[2])/ notas.length).toFixed(2);

var statusNotas;

if (media < mediaParaAprovacao){
    statusNotas = "O aluno esta reprovado"
} else {
    statusNotas = "O aluno esta aprovado"
}

console.log(`A primeira nota è: ${notas[0]},A segunda nota è: ${notas[1]},
A terceira  nota è: ${notas[2]} \n
A media do aluno ${media}, portanto o aluno esta ${statusNotas}`);
