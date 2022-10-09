import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const tShirts = useLoaderData();

    const [cart, setCart] = useState([])

    const handleAddToCart = (tShirt) => {
        const exists = cart.find(ts => ts._id === tShirt._id);
        if(exists){
            alert('T-Shirt is already added');
        }else{
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }
        }

    const handleRemoveItem = (tShirt) => {
        const remaining = cart.filter(ts => ts._id !== tShirt._id);
        setCart(remaining);
    }
        
    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
            {
                tShirts.map(tShirt => <TShirt 
                    key={tShirt._id}
                    tShirt={tShirt}
                    handleAddToCart={handleAddToCart}
                />)
            }
            </div>
            <div className='cart-container'>
                <Cart handleRemoveItem={handleRemoveItem} cart={cart}/>
            </div>
        </div>
    );
};

export default Home;