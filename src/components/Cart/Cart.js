import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const { cart, handleClearCart } = props;

    let quantity = 0
    let totalPrice = 0;
    for (const product of cart) {
        quantity += product.quantity;
        totalPrice += product.price * quantity;
    }
    const tax = parseFloat((totalPrice * 0.15).toFixed(2));
    const shipping = Math.ceil(quantity / 5) * 5; //5$ per 5 product
    const grandTotal = totalPrice + shipping + tax;

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <div className='cart-details'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <p className='grand-total'>Grand Total: ${grandTotal}</p>
            </div>
            <button className='btn-clearCart' onClick={handleClearCart}>Clear Cart <FontAwesomeIcon icon={faTrash} /></button>
            <button className='btn-reviewOrder'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    );
};

export default Cart;