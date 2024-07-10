import mesto from '../../images/mesto.jpg';
import stellar from '../../images/stellarBurger.jpg';
import procharity from '../../images/ProCharity.jpg';
import sagaart from '../../images/sagaart.jpg';

export const projects = [
    {
        img: sagaart,
        name: 'Sagaart',
        desc: 'Service for valuation and sale of art objects.',
        stack: 'Stack: TypeScript, React, CSS-modules, GravityUI, Webpack.',
        link: 'https://sagaart.bounceme.net'
    },
    {
        img: stellar,
        name: 'Stellar Burger',
        desc: 'Website designer for creating an order with space burgers. Here you will need to register to place an order. And it’s just beautiful.',
        stack: 'Stack: TypeScript, React, CSS-modules, DND, Redux, Webpack.',
        link: 'https://lucy2n.github.io'
    },
    {
        img: mesto,
        name: 'Mesto',
        desc: 'An interactive page with the ability to add picture cards. Each card can be liked and deleted. If a picture card belongs to you, you can delete it.',
        stack: 'Stack: JavaScript, HTML, CSS, Webpack, BEM.',
        link: 'https://lucy2n.github.io/mesto-project/'
    },
    {
        img: procharity,
        name: 'ProCharity',
        desc: 'ProCharity is a place where charities and volunteers can find each other. ProCharity is for professionals ready to share skills and experience with charities and develop with them.',
        stack: 'Stack: TypeScript, React, Moleculer, Storybook, Vite.',
        link: 'https://procharity.ru'
    },
];
 