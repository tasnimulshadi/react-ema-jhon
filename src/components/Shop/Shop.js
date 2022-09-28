import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    //products data
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('localShoes.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    //cart data
    const [cart, setCart] = useState([]);

    //btn event handler add to cart 
    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    //btn event handler clear cart 
    const handleClearCart = () => setCart([]);


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