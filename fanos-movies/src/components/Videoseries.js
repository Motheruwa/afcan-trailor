import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Styles from './Videoseries.module.css'
import ReactPlayer from 'react-player'
const Videoseries = () => {
    const [movie,setmovie]=useState([])
    const params=useParams()
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/tv/${params.id}/videos?api_key=a8c443041286f5f29afcec64ec72d074&language=en-US`).then((response)=>setmovie(response.data.results))
    },[params.id])
    let vid=movie.map(k=>k.key)
    let fvid=vid[0]

  return (
    <div className={Styles.video}>
         <ReactPlayer classname={Styles.player} 
         url={`https://www.youtube.com/watch?v=${fvid}`}
         width='90%'
         height='100vh'
         />
    </div>
  )
}

export default Videoseries
