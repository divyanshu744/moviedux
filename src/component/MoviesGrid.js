import React, { useState } from "react";
import '../styles.css';
import MovieCard from "./MovieCard";

export default function MoviesGrid({movies,watchList,toggleWatchList}){
    

    const [searchTerm , setsearchTerm]= useState("")


  

    const handleSearchChange =(e)=>{
        setsearchTerm(e.target.value);
    };
    const filterdMovies = movies.filter(movie=>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return(
       
        <div>
            <input type="text" className="search-input
            " placeholder="search movies...."
               value={searchTerm}
               onChange={handleSearchChange}/>

            <div className="movies-grid">
            {
                filterdMovies.map(movie => (
                   <MovieCard movie={movie} key={movie.id} toggleWatchList={toggleWatchList} isWatchListed={watchList.includes(movie.id)}></MovieCard>
                ))
            }
 
        </div>  
        </div>
    );

}