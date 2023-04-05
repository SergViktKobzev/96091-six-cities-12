import {Outlet, useMatch} from 'react-router-dom';
import Header from '../../components/header/header';
import {AppRoute, LayoutClassName} from '../../const';
import {useMemo} from 'react';
import {Offers} from '../../types/offers';
import Footer from '../../components/footer/footer';

type LayoutProps = {
  offers: Offers;
};

export default function Layout({offers}: LayoutProps): JSX.Element {

  const mainPageRoute = useMatch(AppRoute.Main);
  const favoritesPageRoute = useMatch(AppRoute.Favorites);
  const loginPageRoute = useMatch(AppRoute.Login);

  const className = useMemo(() => {
    if (mainPageRoute) {
      return LayoutClassName.Main;
    }

    if (favoritesPageRoute) {
      return offers.length ? LayoutClassName.Default : LayoutClassName.FavoritesEmpty;
    }

    if (loginPageRoute) {
      return LayoutClassName.Login;
    }

    return LayoutClassName.Default;
  }, [mainPageRoute, favoritesPageRoute, offers.length, loginPageRoute]);

  return (
    <div className={className}>
      <Header />
      <Outlet />
      {favoritesPageRoute && <Footer />}
    </div>
  );
}
