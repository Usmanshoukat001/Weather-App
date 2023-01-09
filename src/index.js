import ReactDOM from 'react-dom';
import App from './App';
import Index from './Components/Index';
import Home from './Components/Home';
import Nav from './Components/Link';
import User from './Components/User';
import {
  BrowserRouter , 
  Routes, 
  Route,
  Link
} from 'react-router-dom';import React from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
    <BrowserRouter>
      <Index />
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/link" element={<Nav />} />
      </Routes>

    </BrowserRouter>
    <User/>
  </React.StrictMode>
);
// ReactDOM.render(

//   <App /> 
//   ,document.getElementById('root')
// );

