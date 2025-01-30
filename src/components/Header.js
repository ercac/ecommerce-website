import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cart">
                    <FaShoppingCart />Cart
                </Link>
            </nav>
        </header>
    );
};

export default Header;