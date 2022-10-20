import { getLocalStorageData } from "../utilities/localStorage";

export const dataLoader = async () => {
    const response = await fetch('localShoes.json');
    const products = await response.json();

    const localCart = getLocalStorageData('cart');

    let cart = [];
    localCart.forEach(item => {
        const foundProduct = products.find(element => element.id === item.id);
        if (foundProduct) {
            foundProduct.quantity = item.qty;
            cart.push(foundProduct);
        }
    });

    return { products, cart };
}