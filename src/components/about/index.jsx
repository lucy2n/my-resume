import React from 'react';
import main from '../../images/main.jpeg';
import style from './style.module.css';

const About = (className) => {
    return (
        <section className={style.main}>
            <div className={style.flex}>
                <h1 className={style.title}>
                    I am Lucy Naumenko
                </h1>
                <p className={style.desc}>
                    Aspiring front-end developer with a strong foundation in web technologies and a passion for creating user-friendly, accessible interfaces. Recently completed a front-end development course and achieved a winning position at a hackathon, demonstrating skills in teamwork, problem-solving, and innovative thinking. Eager to apply my knowledge and continue growing in the tech industry.
                </p>
            </div>
            <div className={`${style.image_block} ${className}`}>
                <img className={style.image} src={main} alt='me'/>
            </div>
        </section>
    );
};

export default About;