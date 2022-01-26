import React from 'react';
import Caro from './cards/thirdSlider';
import { makeStyles } from '@mui/styles'
import { Box, Typography } from '@mui/material'

const styles = makeStyles({
    main:{
        display:"block"
    },
    title:{
        margin:"5vh 0",
        fontWeight:"600",
        fontFamily:"Nexa",
        textShadow:"0px 0px 1px white",
        color:"white",
        textTransform:"uppercase"
    }
})

export default function ForthComponent() {
    const classes = styles()
  return(
  <Box className={classes.main}>
      <Typography variant='h5' className={classes.title}>
          Loved by people
      </Typography>
      <Caro />
  </Box>
  ) 
}
