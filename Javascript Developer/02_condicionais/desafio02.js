const altura = 1.60;
const peso = 52;

const imc = peso / Math.pow(altura, 2);
console.log(imc);

if (imc < 18.5) {
    console.log('Você está abaixo do peso!');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Seu peso está normal!');
} else if (imc >= 25 && imc < 30) {
    console.log('Você está acima do peso!');
} else if (imc >= 30 && imc < 40) {
    console.log('Você está obeso!');
} else if (imc > 40) {
    console.log('Você está obeso e em uma situação grave!');
}