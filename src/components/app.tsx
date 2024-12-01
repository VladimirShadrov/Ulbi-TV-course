import { Link, Route, Routes } from 'react-router-dom';
import Counter from './counter';
import './index.scss';
import MainPage from '../pages/mainPage';
import AboutPage from '../pages/aboutPage';
import { AsyncMainPage } from '../pages/main.async';
import { AsyncAboutPage } from '../pages/about.async';
import { Suspense } from 'react';

const App = () => {
  return (
    <div>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={'Подгружаю страницу.....'}>
        <Routes>
          <Route path={'/'} element={<AsyncMainPage />} />
          <Route path={'/about'} element={<AsyncAboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
