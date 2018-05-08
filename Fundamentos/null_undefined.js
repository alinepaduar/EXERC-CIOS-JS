let valor; // Não inicializada.
console.log(valor);

valor = null; // É uma inicializada, mas com ausência de valor.
console.log(valor);

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // Evite atribuir o undefined.
console.log(!!produto.preco);
delete produto.preco; // Deletar um elemento do objeto.
console.log(produto);

produto.preco = null; // Sem preço
console.log(!!produto.preco);
console.log(produto);

