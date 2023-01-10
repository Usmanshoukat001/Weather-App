import React from 'react'
import "./Movie.css";

const Movie = (props) => {
  return (
    <>
    <div className='contianer'>
    <div className='movie_div'>
     <a href={props.url}><img src={props.Poster} /></a>
     <p>Title: {props.Title}</p>
     <p>Year: {props.Year}</p>
     <p>Rating: {props.imdbID}</p>
    
    </div>
    </div>
    </>
  )
}
export default Movie;