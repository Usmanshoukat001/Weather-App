import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router, 
  Routes, 
  Route,
  Link
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h1 style={{color:'orange'}}>
   
    <Link to={'/'}>Home</Link>&nbsp;
    <Link to={'/link'}>Link</Link>

   
    </h1>        </p>
      </header>
    </div>
  );
}

export default App;
