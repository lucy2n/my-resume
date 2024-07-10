import React , {useState, useEffect, useRef} from 'react';
import Header from '../../components/header';
import About from '../../components/about';
import style from './style.module.css';

const MainPage = () => {
    const [isInView, setIsInView] = useState(false);
    const targetRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if (targetRef.current) {
          const rect = targetRef.current.getBoundingClientRect();
          const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
          setIsInView(isVisible);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll();
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <div>
            <Header />
            <About ref={targetRef} className={isInView ? style.image_block_active : ''} />
        </div>
    );
};

export default MainPage;