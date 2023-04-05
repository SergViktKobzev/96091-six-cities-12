import {Helmet} from 'react-helmet-async';
import cl from './not-found.module.css';

export default function NotFoundPage(): JSX.Element {
  return(
    <div className={cl.container}>
      <Helmet>
        <title>6 cities not found page</title>
      </Helmet>
      <h1>404. Page not found</h1>
    </div>
  );
}
