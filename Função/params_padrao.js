// Estratégia 1 para gerar valor padrão
function soma_1(a, b ,c){
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma_1(), soma_1(3), soma_1(1,2,3), soma_1(0, 0, 0));

// Estratégia 2, 3 e 4 para gerar valor padrão
function soma_2(a, b, c){
    a = a != undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;
    return a + b + c;
}

console.log(soma_2(), soma_2(3), soma_2(1, 2, 3), soma_2(0, 0, 0));

// Valor padrão do es2015
function soma_3(a = 1, b = 1, c = 1){
    return a + b + c;
}

console.log(soma_3(), soma_3(3), soma_3(1, 2, 3), soma_3(0, 0, 0));