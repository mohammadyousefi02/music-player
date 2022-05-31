import { Box,Typography } from '@mui/material'
import React, { useState } from 'react'

import svgImages from "../../../assets/svgs"
import {logo} from "../../../assets/images"

import SideBarLinks from '../SideBarLinks'

function SideBar() {  
const [activeLink,setActiveLink] = useState(1)
 const [sideBarItems,setSideBarItems] = useState([
     {title:"all songs",img:svgImages.allSongs,id:1,path:'/'},
     {title:"favorite songs",img:svgImages.favorite,id:2,path:'/fave-songs'},
     {title:"top player songs",img:svgImages.topPlayerSongs,id:3,path:'/top-player'},
     {title:"popular singers",img:svgImages.popularSingers,id:4,path:'/popular-singers'},
     {title:"contact us",img:svgImages.contactUs,id:5,path:'/contact-us'},
     {title:"about us",img:svgImages.aboutUs,id:6,path:'/about-us'},
 ])   

 function handleClickItem(id){
    setActiveLink(id)
 }

  return (
    <Box sx={{width:"300px",bgcolor:"#333",borderBottomRightRadius:"40px",px:5,py:3,display:"flex",flexDirection:"column",'& a':{textDecoration:'none'}}}>
        <Box sx={{display:"flex",gap:2,alignItems:"center"}}>
            <Box component="img" src={logo} width="50px"/>
            <Typography sx={{color:"#1DB954"}}>Music Player</Typography>
        </Box>
        <Box sx={{my:5,display:"flex",flexDirection:"column",gap:3,flex:1}}>
            {sideBarItems.map(item=>(
                <SideBarLinks key={item.id} clickF={handleClickItem} activeLink={activeLink} item={item}></SideBarLinks>
            ))}
        </Box>
        <Box sx={{display:"flex",gap:1,alignItems:"center",color:'#fff'}}>
            {svgImages.copyRight("#fff")}
            <Typography>copy right all reserver hossein naseri</Typography>
        </Box>
    </Box>
  )
}

export default SideBar