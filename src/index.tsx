import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
import Routes from './routes';
import Notes from './notes';

const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
},
{
  path: "/notes",
  element: <Notes />
}
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Routes/> */}
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Routes/>
      <ReactRoutes>
        <Route path='/' element={<App/>}/>
        <Route path='/notes' element={<Notes/>}/>
      </ReactRoutes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
