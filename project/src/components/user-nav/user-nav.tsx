import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type AuthorizationStatusProps = {
  authorizationStatus: AuthorizationStatus;
};

export default function UserNav({authorizationStatus}: AuthorizationStatusProps): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {authorizationStatus === AuthorizationStatus.Auth ?
            <Link className="header__nav-link header__nav-link--profile" to="/">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
              <span className="header__favorite-count">3</span>
            </Link> :
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>}
        </li>
        {
          authorizationStatus === AuthorizationStatus.Auth ?
            <li className="header__nav-item">
              <Link className="header__nav-link" to="/">
                <span className="header__signout">Sign out</span>
              </Link>
            </li> :
            null
        }
      </ul>
    </nav>
  );
}
