import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';

const FooterItem = ({item}) => {
    return (
        <div className={style.main}>
            <img src={item.img} alt={item.name} className={style.img} />
            <NavLink to={item.link} className={style.desc}>
                <p className={style.desc}>{item.name}</p>
            </NavLink>
        </div>
    );
};

export default FooterItem;