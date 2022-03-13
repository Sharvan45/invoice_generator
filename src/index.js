import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routers } from './Routes/routers';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById('root')
);
