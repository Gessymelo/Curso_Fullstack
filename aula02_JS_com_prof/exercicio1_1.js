// declado a Constante global para o codigo do produto
const codigoProduto = "11001122";
// declarcao a variavel Global para o nome do produto
var produto= "sal";
// funcao 
function categoria(){
    //declara a variavel LOCAL para a categoria
    let categoria = "secos";
    return categoria;
}

console.log(`O produto è: ${produto}. O codigo do produto è: ${codigoProduto}. O produto esta na seguinte categoria ${categoria()} `)