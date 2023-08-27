import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {
  const [movie,setmovies] = useState([])
  useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a8c443041286f5f29afcec64ec72d074&language=en-US&page=1`)
    .then((response)=>setmovies(response.data.results))
    return()=>{
    setmovies([])
    }
    
},[])
  return (
    <div className={styles.maincont}>
      <div className={styles.title}>F-MOVIES</div>
      <div className={styles.cont}>
      <div className={styles.movies}>
        {movie.map((list,index)=><Card key={index} {...list}/>)}
      </div>
      </div>
      <div>Have a movie or TV show you'd like to see on fmovies? Tell us about it at?</div>
      <a href='estifanosassalif19@gmail.com'>here</a>
    </div>
  )
}

export default Home
