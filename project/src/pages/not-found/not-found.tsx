import { Link } from 'react-router-dom';
import { AppRoute } from '../../../src/const';

export default function NotFound(): JSX.Element {
  return (
    <div style={{
      'display': 'flex',
      'flexDirection': 'column',
      'justifyContent': 'center',
      'alignItems': 'center',
      'height': '100vh',
    }}
    >
      <h1>404. Not found.</h1>
      <h2>¯\_(ツ)_/¯</h2>
      <Link to={AppRoute.Main}>Go to main page</Link>
    </div>
  );
}
