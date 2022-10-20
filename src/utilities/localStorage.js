const getLocalStorageData = (key) => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
        return JSON.parse(storedData);
    }
    return [];
}

const setLocalStorageData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

const addProductToLocalStorage = (key, productId, productQty) => {

    let data = getLocalStorageData(key);

    const found = data.find(element => element.id === productId);
    if (found) {
        data.forEach(element => {
            if (element.id === productId) {
                element.qty = productQty;
            }
        });
    }
    else {
        data.push({ id: productId, qty: productQty })
    }

    setLocalStorageData(key, data);
}

const removeFromLocalStorage = id => {
    const data = getLocalStorageData('cart');
    const remainingItems = data.filter(items => items.id !== id);
    setLocalStorageData('cart', remainingItems)
}

export { addProductToLocalStorage, getLocalStorageData, removeFromLocalStorage };