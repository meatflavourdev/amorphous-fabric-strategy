import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Grommet } from 'grommet';
import 'fabric-webpack'

const theme = {
  global: {
    breakpoints: {
      xsmall: {
        value: 500,
      },
    },
    font: {
      family: "Inter",
    }
  }
};

ReactDOM.render(
  <Grommet className="App" theme={theme} full>
    <App />
  </Grommet>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
