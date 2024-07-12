import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';
import { Button } from '@gravity-ui/uikit';

const TextMe = () => {
    return (
        <div className={style.main}>
            <h3 className={style.title}>
                Shall we? 👋
            </h3>
            <p className={style.desc}>
                I'm based in Belarus, but I am ready to relocate. I would be happy to help you solve issues such as:
            </p>
            <ul>
                <li className={style.desc}>
                    Developing dynamic and responsive React applications.
                </li>
                <li className={style.desc}>
                    Proficient in building and styling user interfaces with HTML, CSS, and modern JavaScript.
                </li>
                <li className={style.desc}>
                    Expert in ensuring code accuracy and maintaining high coding standards.
                </li>
                <li className={style.desc}>
                    Known for bringing positive energy and a collaborative attitude to every team.
                </li>
            </ul>
            <NavLink to={'mailto:lysia.naumenko2002@gmail.com'}>
                <Button className={style.button} size='xl'>
                    Email me 
                </Button>
            </NavLink>
        </div>
    );
};

export default TextMe;