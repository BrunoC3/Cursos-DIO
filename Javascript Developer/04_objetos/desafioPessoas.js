class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return 'Você está abaixo do peso!';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Seu peso está normal!';
        } else if (imc >= 25 && imc < 30) {
            return 'Você está acima do peso!';
        } else if (imc >= 30 && imc < 40) {
            return 'Você está obeso!';
        } else if (imc > 40) {
            return 'Você está obeso e em uma situação grave!';
        }
    }
}

const jose = new Pessoas('José', 70, 1.75);
const bruno = new Pessoas('Bruno', 52, 1.61)

console.log(jose.classificarImc());
console.log(bruno.classificarImc());