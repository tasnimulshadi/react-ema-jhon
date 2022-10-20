import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartProducts.css'

const CartProducts = ({ product, handleRemoveItem }) => {
    const { id, img, name, price, quantity } = product;


    return (
        <div className='cartProduct'>
            <div className='cartProduct-info'>
                <img src={img ? img : 'https://miro.medium.com/max/720/0*-Ui8_tdq4SiQlOJR'} alt={name + " image"} />
                <div className='cartProduct-info-details'>
                    <h3>{name}</h3>
                    <p>Price: <span>${price}</span></p>
                    <p>quantity: <span>{quantity}</span></p>
                </div>
            </div>
            <button className='cartProduct-removeBtn' onClick={() => handleRemoveItem(id)}><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
    );
};

export default CartProducts;