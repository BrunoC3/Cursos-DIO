class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularViagem(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedio * precoCombustivel;
    }

}

const uno = new Carro('Fiat', 'Branco', 1 / 10);
const midsb = new Carro('Nissa', 'Preto', 1 / 12);

// console.log(uno);

console.log(uno.calcularViagem(104, 5));
console.log(midsb.calcularViagem(104, 5));