import React from 'react';
import './TShirt.css';

const TShirt = ({tShirt, handleAddToCart}) => {
    const {picture, name, price} = tShirt;
    return (
        <div className='t-shirt-div'>
            <img className='t-shirt-img' src={picture} alt="" />
            <h2 className='t-shirt-name'>{name}</h2>
            <h4 className='t-shirt-price'>Price: {price}</h4>
            <button onClick={() => handleAddToCart(tShirt)} className='buy-btn'>Buy This</button>
        </div>
    );
};

export default TShirt;