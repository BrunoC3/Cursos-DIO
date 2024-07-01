const { soma, gets, print } = require('./funcaoPagamento');

const salario = gets();
const beneficios = gets();
const percentualdeDesconto = [5, 10, 15]

function addBeneficios(valorDoSalario, adicionais, salario) {
    return salario - valorDoSalario + adicionais;
}

function calcularSalario(valor, percentual) {
    return valor * (percentual / 100);
}

function quantoDeImposto(salario) {
    if (salario <= 1100) {
        return percentualdeDesconto[0];
    } else if (salario >= 1100.01 && salario <= 2500) {
        return percentualdeDesconto[1];
    } else if (salario >= 2500) {
        return percentualdeDesconto[2];
    }
}

const salarioComDesconto = `Valor do salário com descontos: ${calcularSalario(salario, quantoDeImposto(salario))}`

print(salarioComDesconto) // Normalmente mais utilizado no TX
print(`Valor do salário final: ` + addBeneficios(calcularSalario(salario, quantoDeImposto(salario)), beneficios, salario)) // Utilizado comumente