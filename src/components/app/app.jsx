import MainPage from '../../pages/main';
import About from '../about';
import Header from '../header';
import style from './app.module.css';

function App() {
  return (
    <div className={style.app}>
      <MainPage />
    </div>
  );
}

export default App;
