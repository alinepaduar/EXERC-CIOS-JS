function Aula (nome, videoID) {
    this.nome = nome,
    this.videoID = videoID
}

const aula_01 = new Aula('Bem Vindo!', 123);
const aula_02 = new Aula('Até Breve!', 456);

console.log(aula_01);
console.log(aula_02);

// Simulando o new
function novo (f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype;
    f.apply(obj, params)
    return obj;
}

const aula_03 = novo(Aula, 'Bem Vindo', 123);
const aula_04 = novo(Aula, 'Até Breve', 456);
console.log(aula_03, aula_04);