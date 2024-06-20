
const preco = 100;
const pagamento = 4;

function descomto(preco, pagamento) {
    if (pagamento === 1) {
        return preco - preco * 0.1;
    } else if (pagamento === 2) {
        return preco - preco * 0.15;
    } else if (pagamento === 3) {
        return preco;
    } else if (pagamento === 4) {
        return preco + preco * 0.1;
    }
}

console.log('Total a pagar: ' + descomto(preco, pagamento));