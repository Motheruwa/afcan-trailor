import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Fmovies.module.css'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import axios from 'axios'
const Fmovies = () => {
    const [movie,setmovies] = useState([])
    const [similar,setsimilar] = useState([])
    const params=useParams()
    useEffect(()=> {
        axios.get(`
        https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=a8c443041286f5f29afcec64ec72d074&language=en-US&page=1`).then((response)=>setsimilar(response.data.results))
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=a8c443041286f5f29afcec64ec72d074&language=en-US`)
        .then((response)=>setmovies(response.data))
        return()=>{
        setmovies([])
        setsimilar([])
        }
        
    },[params.id])
    const movieposter =(poster_path)=>{return(
        `https://image.tmdb.org/t/p/original/${poster_path}`)
    }
  return (
    <>
    <div className={styles.container}>
    <div className={styles.box}>
    <Link to={`/video/${movie.id}`}><img src={movieposter(movie.poster_path)} alt='img'/></Link>
    <div className={styles.detail}>
    <div className={styles.title}>
      {movie.original_title}
      
    </div>
    <div className={styles.date}>
    <h3>Released-date : </h3>
    {movie.release_date}
    </div>
    <div className={styles.overview}>
      <h3>Overview:</h3>
      {movie.overview}
    </div>
    <div className={styles.rating}>
      <h3>Rating : </h3>
          {movie.vote_average}
    </div>

    </div>
    </div>
    </div>
    <div className={styles.recomend}><h2>recommendations!</h2></div>
    <div className={styles.similar}>
    {similar.map((list,index)=><Card key={index} {...list}/>)}
    </div>
    </>
  )
}

export default Fmovies
