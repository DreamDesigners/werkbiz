import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { GlobalProvider } from "./context/GlobalState";


export const history = createBrowserHistory();

ReactDOM.render(

  <GlobalProvider>
    <BrowserRouter>
      <Route path="/" />
      <App />
    </BrowserRouter>
  </GlobalProvider>,

  document.getElementById('root')
);

reportWebVitals();
