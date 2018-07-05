// Usando a notação literal
const obj_01 = {}
console.log(obj_01);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj_02 = new Object;
console.log(obj_02);

// Funções Construtoras
function Produto (nome, preco, desc){
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}

const produto_01 = new Produto ('Caneta', 7.99, 0.15);
const produto_02 = new Produto ('Notebook', 2998.99, 0.25);

console.log(produto_01.getPrecoComDesconto(), produto_02.getPrecoComDesconto());

// Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas);
        }
    }
}

const func_01 = criarFuncionario('João', 7980, 4);
const func_02 = criarFuncionario('Maria', 11400, 1);
console.log(func_01.getSalario(), func_02.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);