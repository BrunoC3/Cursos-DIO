// quais açoes meu carrinho pode fazer

//-> adicionar item do carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// Mostrar itens do carrinho
async function displayCart(userCart) {
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
        console.log(
            `${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`
        );
});
}

//-> calcular o total
async function calcuteTotal(userCart) {
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0)
    console.log(`\nTotal: ${result}`)
}

//-> deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// //-> remover um item
// async function removeItem(userCart, index) {
//     const deleteIndex = index - 1;
//     if(index >= 0 && index < userCart.length) {
//         userCart.splice(deleteIndex, 1);
//     }
// }


//-> remover um item - diminui um item
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if (indexFound == -1) {
        console.log("item não encontrado");
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }

}



export {
    removeItem,
    deleteItem,
    calcuteTotal,
    addItem,
    displayCart
}