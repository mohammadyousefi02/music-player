import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

import images from '../../../assets/svgs'

function AllSongItem({item,changeMusic,favFunc,checkFavMusic}) {
  return (
      <>
        <Box sx={{flex:1,display:"flex",alignItems:'center',justifyContent:"space-between",'& svg':{cursor:"pointer"}}}>
                <Box sx={{display:"flex",alignItems:'center',gap:2}} className="cursor-pointer" onClick={()=>changeMusic(item)}>
                    <Avatar src={item.img} sx={{width:"119px",height:"119px"}}/>
                    <Box sx={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                        <Typography sx={{color:"#fff"}}>{item.name}</Typography>
                        <Typography sx={{color:"green"}}>{item.singer}</Typography>
                    </Box>
                </Box>
                <Box sx={{display:"flex",alignItems:'center',gap:20,alignSelf:"end"}}>
                    <Typography sx={{color:"#fff"}}>2:57</Typography>
                    {checkFavMusic(item) ? images.faveIcon("green",()=>favFunc(item)) : images.faveIcon("#f2f2f2",()=>favFunc(item)) }
                </Box>
            </Box>
      
        <Box sx={{background:"linear-gradient(90deg, rgba(29, 185, 84, 0.7) 0%, rgba(196, 196, 196, 0.7) 100%);",height:"4px",widht:"100%"}}/>
      </>
  )
}

export default AllSongItem