// cria uma arry de numeros de 1 a 100
const numeros = Array.from({length:100}, (_, index) => index +1);

//contadores
var qtdFizz =0;
var qtdBuzz= 0;
var qtdfizBuss= 0;

//use .map para transforma o array de numeros e imprimir os resultados
numeros.map(numero =>{
    qtdfizBuss;
    if (numero % 3 === 0 && numero % 5 === 0){
        console.log("FizzBuzz");
        qtdFizz ++;
    }else if (numero% 5 === 0){
        console.log("Buss");
        qtdBuzz++;
    }else{
        console.log(numero);
    }
});

console.log(`quantidade de fizz: ${qtdFizz}`);
console.log(`quantidade de Buzz: ${qtdBuzz}`);
console.log(`quantidade de fizz: ${qtdfizBuss}`);

