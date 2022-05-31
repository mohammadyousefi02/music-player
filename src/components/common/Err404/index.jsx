import { Button } from '@mui/material'
import React from 'react'

import {Link} from "react-router-dom"

function Err404() {
  return (
    <>
        <h1>there is nothing here yet pleace check later</h1>
        <Link to="/"><Button>go back</Button></Link>
    </>
  )
}

export default Err404