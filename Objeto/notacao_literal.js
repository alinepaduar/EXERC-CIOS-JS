const a = 1;
const b = 2;
const c = 3;

const objeto_01 = {a:a, b:c, c:c};
const objeto_02 = {a, b, c};
console.log(objeto_01, objeto_02);

const nomeAttr = 'nota';
const valorAttr = 7.87;

const objeto_03 = {};
objeto_03[nomeAttr] = valorAttr;
console.log(objeto_03);

const objeto_04 = {[nomeAttr]: valorAttr};
console.log(objeto_04);

const objeto_05 = {
    funcao_01: function() {/*...*/},
    funcao_02(){/*...*/}
}
console.log(objeto_05);
