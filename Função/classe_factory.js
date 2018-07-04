// CLASSE
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}
const pessoa_01 = new Pessoa('João');
pessoa_01.falar();

// FACTORY
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const pessoa_02 = criarPessoa('João');
pessoa_02.falar();