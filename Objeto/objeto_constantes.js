// pessoa -> aponta pra um endereço de memória : 123 -> que tem o objeto criado { ... }
const pessoa = {nome: 'João'};
pessoa.nome = 'Pedro';
console.log(pessoa);

// pessoa -> 456 -> { ... }
// pessoa = {nome: 'Ana'};

Object.freeze(pessoa); // Objeto congelado, não pode ser alterado.

pessoa.nome = 'Maria';
pessoa.endereco = 'Rua ABC';
delete pessoa.nome;
console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'João'});
pessoaConstante.nome = 'Maria';
console.log(pessoaConstante);