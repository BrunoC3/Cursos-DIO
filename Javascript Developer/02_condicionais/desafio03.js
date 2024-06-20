
const preco = 100;
const pagamento = 1;

if (pagamento === 1) {
    console.log(`Valor total com desconto no débito: ${preco - preco * 0.1}`);
} else if (pagamento === 2) {
    console.log(`Pagamento com dinheiro ou Pix: ${preco - preco * 0.15}`);
} else if (pagamento === 3) {
    console.log(`Preço no credito sem desconto em 2x no cartão: ${preco}`);
} else if (pagamento === 4) {
    console.log(`Preço acima de duas vezes no cartão: ${preco + preco * 0.1}`);
}