import Movies from './pages/Movies'
import Contact from './pages/Contact'
import Series from './pages/Series'
import { Route,Routes } from 'react-router-dom';
import Fmovies from './pages/Fmovies';
import Fseries from './pages/Fseries';
import Video from './components/Video';
import Videoseries from './components/Videoseries';
import Navbar from './pages/Navbar'
import Home from './pages/Home';
import Footer from './components/Footer';
function App() {
 
  return (
    <>
  <Navbar/>

    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/contact" element={<Contact/>} />
      <Route path = "/movies" element={<Movies/>} />
      <Route path = "/series" element={<Series/>}/>
      <Route path = "/fmovies/:id" element={<Fmovies/>}/>
      <Route path = "/fseries/:id" element={<Fseries/>}/>
      <Route path = "/video/:id" element={<Video/>}/>
      <Route path = "/videoseries/:id" element={<Videoseries/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
