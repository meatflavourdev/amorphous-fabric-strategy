import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './layout/App';
//import reportWebVitals from './reportWebVitals';
import { Grommet } from 'grommet';
import 'fabric-webpack'
import ProjectProvider from './layout/context/ProjectContext';

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

const darkMode = false;

ReactDOM.render(
  <Grommet className="App" theme={theme} themeMode={darkMode ? "dark" : "light"} full>
    <ProjectProvider>
      <App />
    </ProjectProvider>
  </Grommet>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
