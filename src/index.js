import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// let city={
//   name:"Pune",
//   state:"Maharashtra"
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // React.createElement("h1", {style:{color:"blue"}},"Hello"),
  // <h2>{city.name} is in {city.state}   !!</h2>,
  document.getElementById('root')
);


