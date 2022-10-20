import React, { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { addProductToLocalStorage, getLocalStorageData } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    //products data
    const products = useLoaderData();

    //cart data
    const [cart, setCart] = useState([]);

    //btn event handler add to cart 
    const handleAddToCart = product => {
        let newCart = [];

        let addedProduct = cart.find(element => element.id === product.id)
        if (!addedProduct) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            const restCart = cart.filter(element => element.id !== product.id)
            addedProduct.quantity++;
            newCart = [...restCart, addedProduct];
        }

        setCart(newCart);
        addProductToLocalStorage('cart', product.id, product.quantity)
    }

    //btn event handler clear cart 
    const handleClearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    //on relode show previous stored cart data
    useEffect(() => {
        const storedData = getLocalStorageData('cart');
        let storedCart = [];
        for (const item of storedData) {
            const foundProduct = products.find(product => product.id === item.id);
            if (foundProduct) {
                foundProduct.quantity = item.qty;
                storedCart.push(foundProduct)
            }
        }
        setCart(storedCart);
    }, [products])


    return (
        <div className='shop-section'>
            <div className="products-container">
                {
                    products.map(element =>
                        <Product
                            key={element.id}
                            product={element}
                            handleAddToCart={handleAddToCart}
                        ></Product>
                    )
                }
            </div>

            <div className="cart-section">
                <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;