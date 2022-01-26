import React from 'react';
import { useMediaQuery } from "@mui/material";
import { makeStyles } from '@mui/styles'
import { Box, Button, Typography, Paper } from '@mui/material'
import Carousel from './forthCarousal';

const styles=makeStyles({
    main:{
        flexDirection:"row",
        flexWrap:"nowrap",
        width:"100%",
        backgroundColor:"inherit",
        borderRadius:"20px",
        border: ".1px solid white"
    },
    left:{
        color:"white",
        display:"flex",
        flexDirection:"column",
        justifyContent: "space-evenly",
    },
    typoBig:{
        fontWeight:600,
        fontFamily: 'Nexa',
        textShadow: "1px 0px 0px  #b80f57",
        paddingTop:"2vw",
        paddingLeft:"2vw", color:"#b80f57"
    },
    typoSmall:{
        fontWeight:200,    
        fontSize:"13px",
        paddingLeft:"2vw"
    },
    right:{
        // padding:"20px"
        overflow:"hidden",
        margin:"auto 0",
    }
})

export default function MainCard(props) {
    const {name, des} = props
    const classes = styles()
    const mobile = useMediaQuery('(max-width:600px)')
  return(
      <Paper  elevation={8} className={classes.main} sx={{display: mobile? "block": "flex"}}>
          <Box sx={{width: mobile? "100%": "30%"}} className={classes.left}>
               <Typography variant='h5' className={classes.typoBig}>{name} </Typography> 
               <Typography className={classes.typoSmall}>{des} </Typography> 
               
               <Box sx={{ml:"2vw", mb:"2vw"}}>
               <Button variant='contained' size="small" sx={{textTransform:"capitalize", bgcolor:"#7b3fd5", px:"1rem" }}> <strong>view All</strong> </Button>
               </Box>
            </Box>
          <Box  sx={{width: mobile? "100%": "70%"}} className={classes.right}>
              <Carousel/>
          </Box>
      </Paper>
  )
}
