import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import {BsFillPlayFill,BsPauseFill} from "react-icons/bs"

import {logo} from "../../../assets/images"


import {useStyles} from "./headers.style"

import "./headerStyle.css"

function Header({togglePlaying,isPlaying,details,audioElem,stopPlayingFunc}) {
    const [currentTime,setCurrentTime] = useState(0)
    const [duration,setDuration] = useState(0)

    useEffect(()=>{
        setDuration(audioElem.current.getDuration())
    },[])

    useEffect(()=>{
        let inter;
        if(isPlaying){
            inter =  setInterval(()=>{
                setCurrentTime(audioElem.current?.getCurrentTime())
                console.log(audioElem.current?.getCurrentTime())
                 audioElem.current.getDuration() === audioElem.current.getCurrentTime() && stopPlayingFunc()
            },1000)
        }
        return ()=> clearInterval(inter)
    },[isPlaying])
    let classes = useStyles()
  return (
    <Box sx={styles.header}>
        <Container sx={styles.container}>
            <Box sx={[styles.musicCover,{ backgroundImage:`url(${details.img})`,}]}>
                {
                    isPlaying ? <BsPauseFill onClick={togglePlaying} className='control-icons'/>:
                    <BsFillPlayFill onClick={togglePlaying} className='control-icons'/> 
                }
            </Box>
           <Box sx={{flex:1,display: 'flex',flexDirection: 'column',alignItems:"flex-start",px:2}}>
               <Typography className={classes.primaryColor}>{details.name}</Typography>
               <Typography className={classes.primaryColor} component="h6" sx={{m:0}}>{details.singer}</Typography>
               <Box sx={{display:"flex",flexDirection:'column',gap:1,my:1,color:"white"}}>
                <Box sx={{display:"flex",justifyContent:'space-between',px:2}}>
                    <Typography>{("0" + Math.floor(currentTime / 60)).padStart(2, 0)} : {" "}
                    {("0" + Math.floor(currentTime % 60)).slice(-2)}</Typography>
                    <Typography>{("0" + Math.floor(audioElem.current?.getDuration() / 60)).slice(-2)} :{" "}
                    {("0"+Math.floor( audioElem.current?.getDuration() % 60)).slice(-2)}</Typography>
                </Box>
               <Box sx={styles.progressBar}>
                    <Box sx={{background:"linear-gradient(90deg, rgba(29, 185, 84, 0.75) 0%, rgba(19, 114, 53, 0.75) 100%)",borderRadius:"40px",width:`${(currentTime / audioElem.current?.getDuration())*100}%`,height:"30px",position:"absolute",pointerEvents:"none"}}/>
                    <input style={{width:'100%',height:"100%"}} type="range" min="0" max={audioElem.current?.getDuration()} value={currentTime}  onChange={(e) => {
            audioElem.current.seekTo(Number(e.target.value),'seconds');
            setCurrentTime(e.target.value);
          }} />
               </Box>
               </Box>
           </Box>
           <Box sx={{width:"50px",alignSelf:"flex-start",my:2}} component="img" src={logo}/>
        </Container>
    </Box>
  )
}

const styles = {
    header:{
        height: "150px",
        background:"linear-gradient(180deg, rgba(51,51,51,1) 40%, rgba(34,83,90,1) 100%)",
        pt:1
    },
    container:{
        display: "flex",
        alignItems: "center",
        height:"100%"
    },
    musicCover:{
        width:"125px",
        height:"125px",
        borderRadius:"50%",
        backgroundSize:"cover",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    progressBar:{
        bgcolor:"#C4C4C4",width:"600px",height:"30px",borderRadius:"40px",position:'relative',
        overflow:"hidden",
        '& input':{
            display:'block',
            background:'transparent',
            appearance: "none",
            borderRadius:"40px",
            "&::-webkit-slider-thumb": {
                appearance: "none",
                height: 30,
                width: 20,
                backgroundColor: "transparent",
                
              },
              "&::-ms-track": {
                background: "red",
              },
        }
    }
}

export default Header