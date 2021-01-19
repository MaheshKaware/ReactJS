import logo from './logo.svg';
import './App.css';
import PostList from "./Components/PostList"; 
import {Routes , Route} from "react-router-dom";
import{Home,About,Events,Contacts,History} from "./Pages"

function App() {
  return (
    <div className="App">
      <PostList />
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} >
            <Route path="/history" element={<History />} />
        </Route>

        <Route path="/contacts" element={<Contacts />}/>
        <Route path="events" element={<Events/>}/>
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React !!!!!!!
        </a>
      </header> */}
    </div>
  );
}

export default App;
