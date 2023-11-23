import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Info from './routes/Info.jsx';
import Cadastro from './routes/Cadastro.jsx';
import Contato from './routes/Contato.jsx';
import Editar from './routes/Editar.jsx';
import Excluir from './routes/Excluir.jsx';
import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      {path: '/', element: <Home/>},
      {path: '/info', element: <Info/>},
      {path: '/cadastro', element: <Cadastro/>},
      {path: '/contato', element: <Contato/>},
      {path: '/editar/paciente/:id', element: <Editar/>},
      {path: '/excluir/paciente/:id', element: <Excluir/>},
      {path: '/login', element: <Login/>}
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);