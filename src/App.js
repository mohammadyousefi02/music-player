import logo from './logo.svg';
import './App.css';

import Main from "./components/Layout/Main"
import FavSongs from './components/Layout/FavSongs';
import Err404 from './components/common/Err404';

import { Route,Routes } from 'react-router-dom';

import ReactPlayer from 'react-player';
import musics from "./assets/music"
import { useState,useRef } from 'react';

import { evan,shayea,mohsenYeganeh } from './assets/images'

function App() {
  const [ musicDetails,setMusicDetails] = useState({name:"behet ghol midal",singer:"mohsen yeganeh",img:mohsenYeganeh,id:3,url:musics.behetGholMidam})
  const [isPlaying,setIsPlaying] = useState(false)
  const musicRef = useRef()
  const [favMusics,setFavMusics] = useState([])

  const [allSongs,setAllSongs] = useState([
    {name:"ahd bastam",singer:"evan band",img:evan,id:1,url:musics.ahdKardam},
    {name:"az avval",singer:"shayea",img:shayea,id:2,url:musics.azAvval},
    {name:"behet ghol midal",singer:"mohsen yeganeh",img:mohsenYeganeh,id:3,url:musics.behetGholMidam},
])

  function togglePlaying(){
    setIsPlaying(!isPlaying)
  }
  
  function changeMusic(music){
    setMusicDetails(music)
    setIsPlaying(true)
  }

  function toggleFav(obj){
    if(checkFavMusic(obj)){
        let copiedFavs = [...favMusics]
        copiedFavs = copiedFavs.filter(item=>item.id !== obj.id)
        setFavMusics(copiedFavs)
    }else{
      const copiedFavs = [...favMusics]
      copiedFavs.push(obj)
      setFavMusics(copiedFavs)
    }
  }  

  function checkFavMusic(obj){
    return favMusics.find(item=>item === obj)
  }

  function stopPlaying(){
    setIsPlaying(false)
  }


  return (
    <>
    <ReactPlayer ref={musicRef} url={musicDetails.url} playing={isPlaying} style={{display:"none"}}/>
    <div className="App">
    <Routes>
      <Route path='/' element={<Main stopPlaying={stopPlaying} musicRef={musicRef} musicDetails={musicDetails} togglePlaying={togglePlaying} isPlaying={isPlaying}
      toggleFav={toggleFav} changeMusic={changeMusic} allSongs={allSongs} checkFavMusic={checkFavMusic}
      />}/>

      <Route path='fave-songs' element={<FavSongs stopPlaying={stopPlaying} musicRef={musicRef} musicDetails={musicDetails} togglePlaying={togglePlaying} isPlaying={isPlaying}
      toggleFav={toggleFav} changeMusic={changeMusic} allSongs={favMusics} checkFavMusic={checkFavMusic}
      />}/>

      <Route path='*' element={<Err404/>}/>


    </Routes>
      

    </div>
    </>
  );
}

export default App;
