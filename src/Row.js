import axios from './axios'
import React, { useEffect, useState } from 'react'
import "./Row.css"

function Row({title,fetchUrl,isLargeRow = false}) {
   const [movies,setMovies] = useState([])

   const base_url = "https://api.themoviedb.org/3"

   useEffect(()=>{
    async function fetchData(){
    
         const request = await axios.get(fetchUrl)
         setMovies(request.data.results) 
        ;
         return request
    }
    fetchData()
   },[fetchUrl])

   console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className='row-posters'>
       {movies.map(movie => {
        return( <img className={`row-poster ${isLargeRow && "row-posterLarge"}`} src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>)
       
       })}
       </div>
    </div>
  )
}

export default Row
