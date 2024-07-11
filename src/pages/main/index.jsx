import React from 'react';
import Header from '../../components/header';
import About from '../../components/about';
import Info from '../../components/info';
import Projects from '../../components/projects';
import TextMe from '../../components/text-me';
import Footer from '../../components/footer';

const MainPage = () => {
    return (
        <div>
            <Header />
            <About />
            <Info />
            <Projects />
            <TextMe />
            <Footer />
        </div>
    );
};

export default MainPage;