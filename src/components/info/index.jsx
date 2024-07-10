import React from 'react';
import style from './style.module.css';

const Info = () => {
    return (
        <div className={style.main}>
            <p className={style.text}>
                JavaScript
            </p>
            <p className={style.text}>
                TypeScript
            </p>
            <p className={style.text}>
                React 
            </p>
            <p className={style.text}>
                Redux
            </p>
            <p className={style.text}>
                HTML
            </p>
            <p className={style.text}>
                CSS
            </p>
            <p className={style.text}>
                Jest
            </p>
            <p className={style.text}>
                Cypress
            </p>
            <p className={style.text}>
                Webpack
            </p>
        </div>
    );
};

export default Info;