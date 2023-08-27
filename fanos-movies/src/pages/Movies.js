import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Movies.module.css'
import Card from '../components/Card'
export default function Movies() {
    const [movie,setmovies] = useState([])
    const [page,setpage] = useState(1)
    
     function increment(){
             return( setpage(page+1))
     }
     function decrement(){
      return(setpage(page-1))
     }
    
    useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a8c443041286f5f29afcec64ec72d074&language=en-US&page=${page}`)
        .then((response)=>setmovies(response.data.results))
        return()=>{
        setmovies([])
        }
        
    },[page])
    if(page===0){
      return(setpage(1)
      )
     }
  return (
    <>
    <div className={styles.box}>
      <div className={styles.title}>Movies</div>
      <div className={styles.movies}>
        {movie.map((list,index)=><Card key={index} {...list}/>)}
      </div>
      <div className={styles.button}>
        page
        <button onClick={()=>decrement()}>-</button>
        <button onClick={()=>setpage(1)}>1</button>
        <button onClick={()=>setpage(2)}>2</button>
        <button onClick={()=>setpage(3)}>3</button>
        <button onClick={()=>setpage(4)}>4</button>
        <button onClick={()=>setpage(5)}>5</button>
        <button onClick={()=>increment()}>+</button>
      </div>
     
    </div>
    
    </>
  )
}
