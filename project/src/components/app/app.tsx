import MainPage from '../../pages/main-page/main-page';

type offerCountProps = {
  offerCount: number;
};

export default function App({offerCount}: offerCountProps): JSX.Element {
  return (
    <MainPage offerCount={offerCount}/>
  );
}

