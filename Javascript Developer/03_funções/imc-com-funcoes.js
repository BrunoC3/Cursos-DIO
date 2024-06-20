
function calcularimc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarimc(imc) {
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

(function () {
    const altura = 1.60;
    const peso = 52;

    const imc = calcularimc(peso, altura);

    console.log(classificarimc(imc));
})();