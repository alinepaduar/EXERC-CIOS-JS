const escola = 'Cod3r';

/* Função charAt
    Utilizada para buscar a letra
    na posição desejada.
*/
console.log(escola.charAt(4));

/* Função charCodeAt
    Utilizada para buscar a letra
    desejada em código ASCII.
*/
console.log(escola.charCodeAt(4));

/* Função indexOf
    Utilizada para buscar 
    a posição da letra desejada.
*/
console.log(escola.indexOf('r'));

/* Função substring
    Utilizada para começar e terminar a string 
    pelas posições desejadas.
*/
console.log(escola.substring(1));
console.log(escola.substring(3));

/* Função concat
    Utilizada para concatenar 
    strings/valores.
*/
console.log('Escola '.concat(escola).concat('!'));
console.log('Escola ' + escola + '!');

/* Função replace
    Utilizada para substituir a posição 
    desejada da palavra por outra palavra.
*/
console.log(escola.replace(3, 'e'));

/* Expressão Regular /\w/g com replace
    Utilizada para substituir todas as letras
    da string pela letra desejada.
*/
console.log(escola.replace(/\w/g, 'e'));

/* Função split
    Utilizada para converter a string em array
    separando os elementos com o separador (,)
    de acordo com a string.
*/
console.log('Aline,Gustavo,Leonardo'.split(','));