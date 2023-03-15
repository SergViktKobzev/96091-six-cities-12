import {Helmet} from 'react-helmet-async';

export default function NotFoundPage(): JSX.Element {
  return(
    <div className="page page--gray">
      <Helmet>
        <title>6 cities not found page</title>
      </Helmet>
      <h1>404. Page not found</h1>
    </div>
  );
}
