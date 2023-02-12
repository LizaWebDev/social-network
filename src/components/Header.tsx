import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-holiday-summer-logo-png-image_711561.jpg"
                alt=""/>
        </header>
    );
}

export default Header;