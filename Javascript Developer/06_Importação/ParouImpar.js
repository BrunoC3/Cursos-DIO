const { gets, print } = require('./funcaoParouImpar');

const numeros = gets();
let MaiorPar = null;
let MenorImpar = null;

for (let i = 0; i < numeros; i++) {
    const n = gets();
    if (n % 2 === 0) {
        if (MaiorPar === null || n > MaiorPar) {
            MaiorPar = n;
        }

    } else {
        if (MenorImpar === null || n < MenorImpar) {
            MenorImpar = n;
        }
    }
}

print(`Maior número par é: ` + MenorImpar);
print(`Maior número par é: ` + MaiorPar);