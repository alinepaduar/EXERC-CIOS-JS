/*
    Aula sobre laço de repetição com a variável VAR, 
    onde se é inserido funções com o valor da variável i, 
    mas o VAR é visto como global por não estar dentro de uma função e 
    repetindo sempre o último valor em todas as 
    funções das posições do array criado.
*/
const funcs = [];

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    });
}

funcs[2]();
funcs[8]();