import React from 'react';
import style from './style.module.css';
import { Button } from '@gravity-ui/uikit';

const Header = () => {
    return (
        <div className={style.main}>
            <div className={style.logo}>
                <p className={style.point}>Lucy</p>
                <p className={style.title}>Naumenko</p>
            </div>
            <div className={style.buttons}>
                <Button className={style.button}>English</Button>
                <Button className={style.button}>Russian</Button>
            </div>
        </div>
    )
}

export default Header;