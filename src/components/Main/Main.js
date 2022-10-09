import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Main.css';


const Main = () => {

    return (
        <div>
            <header>
                <nav>
                    <Link className='navLink' to={'/'}>Home</Link>
                    <Link className='navLink' to={'/about'}>About</Link>
                    <Link className='navLink' to={'/orders'}>Orders</Link>
                </nav>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;