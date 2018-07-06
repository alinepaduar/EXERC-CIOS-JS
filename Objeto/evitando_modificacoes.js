// Objeto.preventExtensions
const Produto = Object.preventExtensions({ // Não deixa adicionar novos atributos.
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
});

console.log('Extensível:', Object.isExtensible(Produto));

Produto.nome = 'Bolacha';
Produto.descricao = 'Bolacha recheada com chocolate';
delete Produto.tag;
console.log(Produto);

// Object.seal
const Pessoa = {nome: 'Aline', idade: 21};
Object.seal(Pessoa); // Não deixa adicionar e nem excluir atributos.
console.log('Selado:', Object.isSealed(Pessoa));

Pessoa.sobrenome = 'Pádua';
delete Pessoa.nome;
Pessoa.idade = 22;
console.log(Pessoa);

// Object.freeze = selado + valores constantes
const Animal = {nome: 'Cachorro', idade: 5};
Object.freeze(Animal); // Não deixar alterar, excluir e editar atributos.
console.log('Congelado:', Object.isFrozen(Animal));

Animal.nome = 'Gato';
delete Animal.nome;
Animal.idade = 1;
console.log(Animal);
