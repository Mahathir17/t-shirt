import React from 'react';
import './Cart.css';
const Cart = ({cart, handleRemoveItem}) => {
    return (
        <div className='cart-div'>
            <h3>Order Summery</h3>
            <h5>Order quantity: {cart.length}</h5>
            {
                cart.map(tShirt => <p key={tShirt._id}>
                    {tShirt.name}
                    <button onClick={() => handleRemoveItem(tShirt)} className='removeBtn'>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;