/* 
    Utilizar o ponto para acessar elementos da função.
*/
console.log(Math.ceil(6.1)); // Arredondar valores

const obj = {}
obj.nome = "Comida";
console.log(obj.nome);

function Obj(nome) {
    this.nome = nome;
    this.exec = function() {
        console.log("Teste");
    }
}

const obj_const = new Obj ("Gustavo");
const obj_exemplo = new Obj ("Aline");

console.log(obj_const.nome);
console.log(obj_exemplo.nome);
obj_exemplo.exec();