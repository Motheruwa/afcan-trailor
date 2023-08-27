import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Series.module.css'
import Cardseries from '../components/Cardseries'
export default function Movies() {
    const [series,setseries] = useState([])
    const [page,setpage] = useState(1)
    function increment(){
      return( setpage(page+1))
}
function decrement(){
return(setpage(page-1))
}
    useEffect(()=> {
        axios.get(`
        https://api.themoviedb.org/3/tv/popular?api_key=a8c443041286f5f29afcec64ec72d074&language=en-US&page=${page}`)
        .then((response)=>setseries(response.data.results))
        return()=>{
        setseries([])
        }
        
    },[page])
    if(page===0){
      return(setpage(1)
      )
     }
  return (
      <div className={styles.box}>
      <div className={styles.title}>Series</div>
      <div className={styles.series}>
        {series.map((list,index)=><Cardseries key={index} {...list}/>)}
      </div>
      <div className={styles.button}>
        page
        <button onClick={()=>decrement()}>-</button>
        <button onClick={()=>setpage(1)}>1</button>
        <button onClick={()=>setpage(2)}>2</button>
        <button onClick={()=>setpage(3)}>3</button>
        <button onClick={()=>setpage(4)}>4</button>
        <button onClick={()=>setpage(5)}>5</button>
        <button onClick={()=>setpage(6)}>6</button>
        <button onClick={()=>increment()}>+</button>
      </div>
    </div>
    
  )
}
