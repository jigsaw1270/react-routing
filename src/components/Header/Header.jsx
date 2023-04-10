import React from 'react';
import { Link } from 'react-router-dom';
import Activelink from '../Activelink/Activelink';

const Header = () => {
    return (
        <nav>
            
            <Activelink to="/">Home
            </Activelink>
            <Activelink to="/about">About</Activelink>
            <Activelink to="/contact">Contact</Activelink>
            <Activelink to= "/posts" >Posts</Activelink>

            <Activelink to="/friends">Friends</Activelink>

        </nav>
    );
};

export default Header;