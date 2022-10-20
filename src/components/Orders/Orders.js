import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { removeFromLocalStorage } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import CartProducts from '../CartProducts/CartProducts';
import './Orders.css'

const Orders = () => {
    const { cart: initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart)

    //btn event handler clear cart 
    const handleClearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    const handleRemoveItem = (id) => {
        const remainingItems = cart.filter(items => items.id !== id)
        console.log(remainingItems);
        setCart(remainingItems);
        removeFromLocalStorage(id);
    }

    return (
        <div className='shop-section'>
            <div className="orders-container">
                {
                    cart.map(product =>
                        <CartProducts
                            key={product.id}
                            product={product}
                            handleRemoveItem={handleRemoveItem}
                        ></CartProducts>
                    )
                }
            </div>

            <div className="cart-section">
                <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
            </div>
        </div>
    );
};

export default Orders;