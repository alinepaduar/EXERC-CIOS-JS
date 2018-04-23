const nome = 'Aline';
const concatenacao = 'Olá' + nome + '!';
const template = `
Olá
${nome}!`;

console.log(concatenacao, template);

// Expressões
console.log(`1+1 = ${1+1}`);

// Passar o texto como parâmetro para converter em Maiúsculas.
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);