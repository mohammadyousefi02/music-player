import React, { useState } from 'react'

import { Box } from '@mui/material'



import { Container } from '@mui/system'

import AllSongItem from '../AllSongItem'

function AllSongsList({changeMusic,favFunc,checkFavMusic,allSongs}) {

  return (
      <Container sx={{flex:1,px:"80px !important",py:5}}>
        <Box sx={{display:"flex",flexDirection:"column",gap:3}}>
            {allSongs.map(item=>(
                <AllSongItem key={item.id} item={item} favFunc={favFunc} changeMusic={changeMusic} checkFavMusic={checkFavMusic}/>
            ))}
        </Box>
      </Container>
  )
}

export default AllSongsList