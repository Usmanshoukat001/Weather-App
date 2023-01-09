import Home from './Home';
import {
    BrowserRouter as Router, 
    Routes, 
    Route,
    Link
  } from 'react-router-dom';
function Index(props){
 
    return <h1 style={{color:'orange'}}>
    <nav>
    <Link to={'/'}>Home</Link>&nbsp;
    <Link to={'/link'}>Link</Link>
    </nav>
    

    
    </h1>
    
}

Index.defaultProps = {
     gender: 'Web Developer'
}
export default Index;