import React,{useContext} from 'react'
import { usercontext } from '../helper/Context'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'
export default function Card({overview,vote_average,original_name,original_title,poster_path,id}) {
  const {user,setuser}=useContext(usercontext)
    const movieposter=(poster_path)=>{return(
        `https://image.tmdb.org/t/p/original/${poster_path}`)
    }
  return (
    
    <div className={styles.box}>
  <Link to={`/video/${id}`}><img src={movieposter(poster_path)} alt='img'/></Link>
  <Link to={`/fmovies/${id}`}>
  <div className={styles.title}>
    <span onClick={()=>setuser(!user)}>{original_title}{original_name}</span>
    
  </div></Link>

  <span className={styles.rating}>{vote_average}</span>
  
</div>
    
  )
}
