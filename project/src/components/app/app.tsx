import { PlaceCardType } from '../../types/types';
import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  placeCards: PlaceCardType[]
}

function App({ placeCards }: AppProps): JSX.Element {
  return <MainPage placeCards={placeCards} />;
}

export default App;
