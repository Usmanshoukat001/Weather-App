import logo from "./logo.svg";
import "./App.css";
import Index from './Components/Index';
import Home from './Components/Home';
import User from './Components/User';

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

      <Router>
      <Index />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Home />} />
      </Routes>

    </Router>
    <User/>

    </h1>        </p>
      </header>
    </div>
  );
}

export default App;
