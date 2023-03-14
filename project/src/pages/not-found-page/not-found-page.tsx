import {Link} from 'react-router-dom';

export default function NotFountPage(): JSX.Element {
  return(
    <div className="page page--gray">
      <Link to="/">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </Link>
      <h1>404. Page not found</h1>
    </div>
  );
}
