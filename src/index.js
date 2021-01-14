import React, { useEffect, useReducer, useState } from 'react';
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

// function Hello({ season }){
//   return(
//     <div>
//       {(season == "summer") ? <Summer /> : <Winter />}
//     </div>
//   );
// }



// function Hello({ season }){
//   const [status,setStatus]=useState("Open");
//   return(
//     <div>
//      <h1> Status : { status }</h1>
//      <button onClick={() => setStatus("closed")}>Close</button>
//      <button onClick={() => setStatus("In-progress")}>In-progress</button>
//     </div>
//   );
// }

// function Hello({ season }){
//   const [val,setVal]=useState("");
//   const [val2,setVal2] = useState("");

//   useEffect(
//    () =>{
//      console.log(`VAL_1 : ${val}`);
//    },[val]);
  

//   useEffect(()=>{
//     console.log(`VAL_2 : ${val2}`);
//   },[val2]);

//   return(
//     <div>
//       <label>Fav Place 1</label>
//       <input value={val} onChange={(e) => setVal(e.target.value)}></input>

//       <label>Fav Place 2</label>
//       <input value={val2} onChange={(e) => setVal2(e.target.value)}></input>
//     </div>
//   );
// }


// function GitHubUser({user}){
//   const [data,setData]=useState(null);
//   useEffect(() =>{
//     fetch(`https://api.github.com/users/${user}`)
//     .then(res => res.json())
//     .then(setData)
//     .catch(console.error);
//   },[]);

//   if(data){
//     return <div>{JSON.stringify(data)}</div>;
//   }
//   return null;
  
// }


function Checkbox(){
  const [checked,toggle]=useReducer(
    checked => !checked,false
  );
  return(
    <div>
      <input type="Checkbox"
      value={checked}
      onChange={toggle} 
      />
      <p>{checked ? "Checked" : "Uncheked"}</p>
    </div>
  );
}



ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

//<Hello />,
//<GitHubUser user="mojombo" />,
<Checkbox/>,
  document.getElementById('root')
);


