import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

const lakeList=[
  "Echo lake",
  "Maud Lake",
  "Cascade lake"
];

// function Hello({ season }){
//   return(
//     <div>
//       <h1>Hello from functional component...</h1>
//      <ul>
//       {lake.map(
//         item => (<li>{item}</li>)
//       )}
//      </ul>
//     </div>
//   );
// }

function Hello({ season }){
  return(
    <div>
      {(season == "summer") ? <Summer /> : <Winter />}
    </div>
  );
}

function  Winter() {
  return(
    <div>
      <h2>Welcome to winter...</h2>
    </div>
  );
  
}

function Summer() {
  return(
    <div>
      <h2> Welcomw to summer...</h2>
    </div>
  );
  
}


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

<Hello season="winter"/>,
  document.getElementById('root')
);


