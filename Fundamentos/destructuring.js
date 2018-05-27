// Novo recurso do ES2015

const pessoa = {
    nome: "Aline",
    idade: 21,
    endereco: {
        logradouro: "Rua da Tristeza",
        numero: "2054"
    }
}

// Tirando de dentro do obj Pessoa o atributo nome e idade.
const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada); 

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);