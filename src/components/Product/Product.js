import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Products = (props) => {
    const { img, name, price, seller, ratings } = props.product;


    return (
        <div className='product'>
            <img src={img ? img : 'https://miro.medium.com/max/720/0*-Ui8_tdq4SiQlOJR'} alt={name + " image"} />
            <div className='product-details'>
                <h3>{name}</h3>
                <div>
                    <p className='product-price'>Price: ${price}</p>
                    <br />
                    <p>Manufacturer : {seller}</p>
                    <p>Rating : {ratings}</p>
                </div>
            </div>
            <button className='btu-addToCart' onClick={() => props.handleAddToCart(props.product)} >Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Products;