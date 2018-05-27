/*
    Aula sobre laço de repetição com a variável LET, 
    onde se é inserido funções com o valor da variável i, 
    mas como o LET está dentro de um bloco, o valor para cada
    função será os valores que adquiriram no loop.
*/
const funcs = [];

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    });
}

funcs[2]();
funcs[8]();