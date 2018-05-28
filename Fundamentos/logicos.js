/*
    v e v = v
    v e f = f
    f e ? = f

    v ou ? = v
    f ou v = v
    f ou f = f

    v xor v = f
    v xor f = v
    f xor v = v
    f xor f = f

    !v = f
    !f = v
*/

function compras (trabalho_01, trabalho_02) {
    const comprarSorvete = trabalho_01 || trabalho_02;
    const comprarTv50 = trabalho_01 && trabalho_02;
    // const comprarTv32 = !!(trabalho_01 ^ trabalho_02); // bitwise xor
    const comprarTv32 = trabalho_01 != trabalho_02;
    const manterSaudavel = !comprarSorvete;

    return { comprarSorvete, comprarTv32, comprarTv50, manterSaudavel }
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));

let num1 = 1;
let num2 = 2;

num1 ++;
console.log(num1);
num1 --;
console.log(num1);

console.log(++num1 === num2--);
console.log(num1 === num2);




