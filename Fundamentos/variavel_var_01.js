/* 
    Variável VAR dentro de bloco que não
    seja uma função, ela será visível globalmente. 
*/
{
    {
        {
            { 
                var sera = "Será ?"
            }
        }
    }
}

console.log(sera);

/* 
    Quando você define uma variável dentro de uma 
    função, o escopo da variável é dentro da função apenas,
    não sendo visível globalmente. 
*/
function teste() {
    var local = 123;
}

teste ();
console.log(local);