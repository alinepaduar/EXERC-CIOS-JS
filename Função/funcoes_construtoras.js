function Carro(velocidade_maxima = 200, delta = 5) {
    // Atributo privado
    let velocidade_atual = 0;

    //metodo público
    this.acelerar = function () {
        if(velocidade_atual + delta <= velocidade_maxima) {
            velocidade_atual += delta;
        } else {
            velocidade_atual = velocidade_maxima;
        }
    }

    //metodo público
    this.getVelocidadeAtual = function() {
        return velocidade_atual;
    }
}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());