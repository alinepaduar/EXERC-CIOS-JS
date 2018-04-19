const peso_1 = 1.0;
const peso_2 = Number('2.0');

console.log(peso_1, peso_2);
// FUnção Number - utilizada para verificar o tipo de cada constante.
console.log(Number.isInteger(peso_1));
console.log(Number.isInteger(peso_2));

const avaliacao_1 = 6.82;
const avaliacao_2 = 9.57;

const total = avaliacao_1 * peso_1 + avaliacao_2 * peso_2;
const media = total / (peso_1 + peso_2);

console.log(media);
// Função toFixed - utilizada para mostrar as casas decimais desejadas.
console.log(media.toFixed(2));

// Converter numérico para uma string
console.log(media.toString());

// Converter numérico para binário.
console.log(media.toString(2));

// Mostrando o tipo da constante.
console.log(typeof media);