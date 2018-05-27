/* 
    Contexto léxico 1 - 
    Local no qual sua variável foi definida no código.
*/
const saudacao = "Olá";

function exec () {
    const saudacao = "Tudo Bem ?"; 
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor.
const cliente = {
    nome: "Gustavo",
    idade: 22,
    endereco: {
        logradouro: 'Maxíminio Baggio',
        numero: '612'
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);