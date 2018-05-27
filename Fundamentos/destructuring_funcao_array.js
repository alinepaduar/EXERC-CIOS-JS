function return_num ([ min = 0, max = 1000 ]) {
    if (min > max) {
        [min, max] = [max, min];
    }

    const valor = Math.random() * (max - min) + min;
    
    return Math.floor(valor);
}

console.log(return_num([50, 40]));
console.log(return_num([992]));
console.log(return_num([, 10]));
console.log(return_num([]));