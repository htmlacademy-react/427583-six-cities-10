import React from 'react';
import {Link} from 'react-router-dom';

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
      <p>404</p>
      <p>Not found</p>
      <p>¯\_(ツ)_/¯</p>
      <Link to="/">Go to main page</Link>
    </div>
  );
}
