/* {} é um objeto 
    ( Coleção de chaves e valores ) */
const pessoa_01 = {};
pessoa_01.nome = 'Aline Pádua'; 
pessoa_01.idade = 21;
pessoa_01['Signo'] = 'Peixes'; // Evitar atributos com espaço.
console.log(pessoa_01);

const pessoa_02 = {
    nome: 'Gustavo Toporowicz',
    idade: 22,
    signo: 'Leão'
}
console.log(pessoa_02);