const { gets, print } = require('./funcoes-auxiliares');

const media = gets();

if (media < 5) {
    console.log('Reprovado!');
} else if (media >= 5 && media < 7) {
    console.log('Recuperação!');
} else if (media >= 7) {
    console.log('Aprovado!');
} else {
    console.log('Número invalido!');
}