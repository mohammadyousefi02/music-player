import { Box } from '@mui/system';
import React from 'react'

import Header from '../../common/Header';
import SideBar from '../../common/SideBar';
import AllSongsList from '../../customs/AllSongsList';

function Main({stopPlaying,musicRef,musicDetails,togglePlaying,isPlaying,toggleFav,changeMusic,checkFavMusic,allSongs}) {
  return (
    <>
        <Header stopPlayingFunc={stopPlaying} audioElem={musicRef} details={musicDetails} togglePlaying={togglePlaying} isPlaying={isPlaying} />
      <Box sx={{display:"flex", flex:1}}>
        <SideBar/>
        <AllSongsList allSongs={allSongs} favFunc={toggleFav} changeMusic={changeMusic} checkFavMusic={checkFavMusic}/>
      </Box>
    </>
  )
}

export default Main