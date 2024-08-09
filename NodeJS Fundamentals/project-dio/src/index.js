import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

// Criando item
const item1 = await createItem("teclado gamer", 120.00, 2)
const item2 = await createItem("fone gamer", 200, 2)

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart)

// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);


await cartService.calcuteTotal(myCart);