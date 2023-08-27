import { usercontext } from '../helper/Context'
import Search from './Search'
import {AiOutlineBars} from 'react-icons/ai'
import {BiMoviePlay} from 'react-icons/bi'
import {RiTvLine} from 'react-icons/ri'
import {GrContactInfo} from 'react-icons/gr'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
import { useState } from 'react'
import React from 'react'

const Home = () => {
    const [user,setuser]=useState(true)
 const [display,setdisplay]=useState(false)
 const style={
  width:display? "160px" : "0px",
  height:display? "350px": "0px",
  border:display? "3px solid #09dfee" : "transparent"

 }
  return (
    <div>
      <usercontext.Provider value={{user ,setuser}}>

<div className={styles.navbar}>
<div className={styles.mobilenav} >
    <span onClick={()=>setdisplay(!display)}><AiOutlineBars size={'3em'}/></span>
    <div className={styles.mobilelink} style={style}>
    <Link to='/movies' onClick={()=>setdisplay(!display)}>Movies<BiMoviePlay /></Link>
    <Link to='/series/' onClick={()=>setdisplay(!display)}>Series<RiTvLine/></Link>
    <Link to='/contact' onClick={()=>setdisplay(!display)}>About<GrContactInfo color={"#fff"}/></Link>
    <Link to='/series/' onClick={()=>setdisplay(!display)}>Series<RiTvLine/></Link>

  </div>
  </div>
<Link to='/'><span className={styles.name}>F-Movies</span></Link>
  
  <div className={styles.link}>
    <Link to='/movies'>Movies<BiMoviePlay /></Link>
    <Link to='/series/'>Series<RiTvLine/></Link>
    <Link to='/contact'>About<GrContactInfo color={"#fff"}/></Link>
  </div>
  <div className={styles.search}><Search/></div>

</div>
</usercontext.Provider>
    </div>
  )
}

export default Home
