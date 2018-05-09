let numero = 1;
{
    /* 
        Mesmo não sendo uma função, o Let terá
        o escopo dentro de qualquer bloco. 
    */
    let numero = 2;
    console.log('Dentro: ', numero);
}
console.log('Fora: ', numero);