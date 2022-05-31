import { Box, Typography } from '@mui/material'
import React from 'react'

import { Link } from "react-router-dom";

function SideBarItem({item,clickF}) {
  return (

    <Link onClick={()=>clickF(item.id)} to={item.path}>
      <Box sx={{display:"flex",alignItems:"center",gap:1}} className="cursor-pointer">
          {window.location.pathname === item.path ? item.img("green") : item.img("#f2f2f2")} 
          <Typography color={window.location.pathname === item.path ? "green" : "#fff"}>{item.title}</Typography>
      </Box>
    </Link>
  )
}

export default SideBarItem