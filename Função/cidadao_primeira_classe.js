// Função em JS é first-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function function_1 () { };

// Armazenar em uma variável
const function_2 = function () { };

// Armazenar em um array
const array_function = [function (a, b) { return a + b }, function_1, function_2];
console.log(array_function[0](2,3));

// Armazenar em um atributo de objeto
const obj = {};
obj.falar = function () { return 'Teste' };
console.log(obj.falar());

// Passar função como parametro
function run(fun) {
    fun();
}

run(function () { console.log('Executando...') });

// Uma função pode retornar/conter uma função
function soma (a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMais(4);