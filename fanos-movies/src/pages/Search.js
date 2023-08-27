import React, { useState,useEffect ,useContext} from 'react'
import {usercontext} from '../helper/Context'
import axios from 'axios'
import Card from '../components/Card'
import styles from './Search.module.css'
export default function Search() {
  const {user,setuser}=useContext(usercontext)
    const [name,setname] = useState('')
    const [res,setres] = useState([])
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/search/multi?api_key=a8c443041286f5f29afcec64ec72d074&language=en-US&query=${name}&page=1&include_adult=false`).then((response)=>setres(response.data.results))
     
    });

   
   
      
  return (

    <>
    <div className={styles.searchbox} >
    <div className={styles.box}  >
      <input onClick={()=> {setname('')(setuser(true))}} value={name}  onChange={(e)=>{setname(e.target.value)}} type="text" placeholder="search.." />
    </div>
    <usercontext.Provider value={{user, setuser}}>
   
    <div className={styles.searchbox}  style={{display : user? 'grid' : 'none'} } >
      <div className={styles.search }  style={{display:name===''?'none':'grid'}}> 

       {(res.length===0)? <p className={styles.notfound}>notfound...!</p>: res.map((list,index)=>{
            return(
                <Card key={index} {...list}/>
            )
        })
        }
      </div>
      </div>
      </usercontext.Provider>

      </div>
    </>
  )
}
