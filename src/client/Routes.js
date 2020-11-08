import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...HomePage,
        path: '/spacex',
        exact: true,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
