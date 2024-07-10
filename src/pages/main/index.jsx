import React , {useState, useEffect, useRef} from 'react';
import Header from '../../components/header';
import About from '../../components/about';
import style from './style.module.css';
import Info from '../../components/info';
import Projects from '../../components/projects';

const MainPage = () => {
    return (
        <div>
            <Header />
            <About />
            <Info />
            <Projects />
        </div>
    );
};

export default MainPage;