const pai = {nome: 'Pedro', cor_cabelo: 'Preto'};

const filha_1 = Object.create(pai);
filha_1.nome = "Ana";
console.log(filha_1.cor_cabelo);

const filha_2 = Object.create(pai, {
    nome: {value: 'Bia', writable:false, enumerable:true},
});

console.log(filha_2.nome);
filha_2.nome = 'Carla';
console.log(`${filha_2.nome} tem cabelo ${filha_2.cor_cabelo}`);

console.log(Object.keys(filha_1));
console.log(Object.keys(filha_2));

for(let key in filha_2) {
    filha_2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`);
}
