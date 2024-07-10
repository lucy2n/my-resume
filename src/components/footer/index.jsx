import React from 'react';
import style from './style.module.css';
import { items } from './constants';
import FooterItem from './footer-item';

const Footer = () => {
    return (
        <footer className={style.main}>
            <div className={style.container}>
                {items.map(item => {
                    return <FooterItem item={item}/>
                })}
            </div>
        </footer>
    );
};

export default Footer;