
function Testname(nome) {
    return 'Olá ' + nome + '.';
}

Testname('Bruno');

function maiorIdade(idade) {
    if (idade >= 18) {
        console.log(Testname('Bruno') + 'Você é maior de idade!');
    } else {
        console.log('Você não é maior de idade!');
    }
}

const idade = 23;

maiorIdade(idade)