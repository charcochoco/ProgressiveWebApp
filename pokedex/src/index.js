import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './index.css';
import App from './screens/App';

import PokemonDetail from './screens/PokemonDetail.js';

//import Home from './screens/Home.js';

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:name",
        element: <PokemonDetail />
      }
      // {
      //   path: "/home",
      //   element: <Home />,
      // },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerConfig}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
