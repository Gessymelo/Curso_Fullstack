const cpf = "123.125.65";

var nome = 'gessy';

function sobreNome(){
    let sobreNome = "Gessy";
    //console.log(sobreNome);
    return sobreNome;
}

console.log(nome);
sobreNome();
console.log(cpf);

//concatendando 
console.log(`O nome è: ${nome}. O sobrenome è: ${sobreNome()}. E o CPF è: ${cpf}`);

