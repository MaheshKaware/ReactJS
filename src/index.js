import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

const lakeList=[
  "Echo lake",
  "Maud Lake",
  "Cascade lake"
];

function Hello({ lake }){
  return(
    <div>
      <h1>Hello from functional component...</h1>
     <ul>
      {lake.map(
        item => (<li>{item}</li>)
      )}
     </ul>
    </div>
  );
}
// let city={
//   name:"Pune",
//   state:"Maharashtra"
// };

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

<Hello lake={lakeList}/>,
  // React.createElement("h1", {style:{color:"blue"}},"Hello"),
  // <h2>{city.name} is in {city.state}   !!</h2>,
  document.getElementById('root')
);


