import {Link, useMatch} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import UserNav from '../user-nav/user-nav';

export default function Header(): JSX.Element {
  const loginPageRoute = useMatch(AppRoute.Login);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {(!loginPageRoute) && <UserNav authorizationStatus={AuthorizationStatus.NoAuth} />}
        </div>
      </div>
    </header>
  );
}
