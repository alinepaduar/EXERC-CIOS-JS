const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

/* Função push - utilizada para
    inserir elementos no array */
valores.push({id:3}, false, null, 'teste');
console.log(valores);

/* Função pop - utilizada para
    deletar o último valor do array */
console.log(valores.pop());
delete valores[0];
console.log(valores);

/* Em JS array é um objeto */
console.log(typeof valores);