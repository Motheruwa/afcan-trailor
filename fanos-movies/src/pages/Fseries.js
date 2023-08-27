import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from './Fseries.module.css'
import Cardseries from '../components/Cardseries'
import axios from 'axios'
const Fseries = () => {
    const [similar,setsimilar] = useState([])
    const [movie,setmovies] = useState([])
    const params=useParams()
    useEffect(()=> {
      axios.get(`
        https://api.themoviedb.org/3/tv/${params.id}/recommendations?api_key=a8c443041286f5f29afcec64ec72d074&language=en-US&page=1`)
        .then((response)=>setsimilar(response.data.results))
        
        axios.get(`https://api.themoviedb.org/3/tv/${params.id}?api_key=a8c443041286f5f29afcec64ec72d074&language=en-US`)
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
    <Link  to={`/videoseries/${movie.id}`}><img src={movieposter(movie.poster_path)} alt='img'/></Link>
    <div className={styles.detail}>
    <div className={styles.title}>
      {movie.original_name}
      
    </div>
    <div className={styles.date}>
    <h4>Released-date : </h4>
    {movie.first_air_date}
    </div>
    <div className={styles.overview}>
      <h4>Overview:</h4>
      {movie.overview}
    </div>
    <div className={styles.rating}>
      <h4>Rating : </h4>
          {movie.vote_average}
    </div>

    </div>
    </div>
    </div>
    <div className={styles.recomend}><h2>recommendations!</h2></div>
    <div className={styles.similar}>
         {
          similar.map((list,index)=> <Cardseries key={index} {...list}/>)
         }
    </div>
    
    </>
  )
}

export default Fseries
