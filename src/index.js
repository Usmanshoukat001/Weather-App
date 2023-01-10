import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import App from './App';
import Movie from './Components/Movie';
import movies from './movie.json'
import {
  BrowserRouter , 
  Routes, 
  Route,
  Link
} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
 // var name = 'usman',
  //age: {20}
root.render(
<>
<h1>GETTING MOVIE DETAIL FROM MOVIE API WEBAPP</h1>
{
movies.map((element) => {
 return (
<Movie 
    imdbID={element.imdbID}
    Title={element.Title}
    Year={element.Year}
    Poster={element.Poster}
    url={element.url}
    /> 
 )
})
}
</>
);

