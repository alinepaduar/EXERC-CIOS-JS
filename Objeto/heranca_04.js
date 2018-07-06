function MeuObjeto () {}
console.log(MeuObjeto.prototype);

const obj_01 = new MeuObjeto;
const obj_02 = new MeuObjeto;
console.log(obj_01.__proto__ === obj_02.__proto__);
console.log(MeuObjeto.prototype === obj_01.__proto__);

MeuObjeto.prototype.nome = "Anônimo";
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}`);
}

obj_01.falar();

obj_02.nome = "Rafael";
obj_02.falar();

const obj_03 = {};
obj_03.__proto__ = MeuObjeto.prototype;
obj_03.nome = "Obj3";
obj_03.falar();

// Resumindo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);