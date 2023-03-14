import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

export default function NotFountPage(): JSX.Element {
  return(
    <div className="page page--gray">
      <Helmet>
        <title>6 cities not found page</title>
      </Helmet>
      <Link to="/">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </Link>
      <h1>404. Page not found</h1>
    </div>
  );
}
