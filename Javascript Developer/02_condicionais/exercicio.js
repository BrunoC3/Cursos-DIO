
const nota1 = 2;
const nota2 = 4;
const nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Você está reprovado!');
} else if (5 <= media < 7) {
    console.log('Você está de recuperação!');
} else if (media >= 7) {
    console.log('Aprovado!');
}