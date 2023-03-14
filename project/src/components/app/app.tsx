import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFountPage from '../../pages/not-found-page/not-found-page';
import Layout from '../../pages/layout/layout';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRout} from '../../const';

type offerCountProps = {
  offerCount: number;
};

export default function App({offerCount}: offerCountProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRout.Main} element={<Layout />}>
          <Route index element={<MainPage offerCount={offerCount}/>} />
          <Route path={AppRout.Login} element={<LoginPage />} />
          <Route path={AppRout.Favorites} element={<FavoritesPage />} />
          <Route path={AppRout.Room} element={<RoomPage />} />
          <Route path='*' element={<NotFountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    //<MainPage offerCount={offerCount}/>
  );
}

