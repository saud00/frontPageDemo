import React from 'react';
import { useMediaQuery } from "@mui/material";
import { makeStyles } from '@mui/styles'
import { Box, Button, Typography } from '@mui/material'
import {FiPlay} from "react-icons/fi";

const styles = makeStyles({
    main:{
        flexDirection:"row-reverse",
        width:"100%" ,
        // paddingTop:"5vh"  
    },
    heading1:{
        fontWeight:200,    
        color: "#7b3fd5",
    },
    heading2:{
        fontWeight:600,
        fontFamily: 'Nexa',
        textShadow: "1px 0px 0px black"
        // transform:"scale(5,5)",
    }, 
    right:{
        display:"block",
        textAlign:"center",
        justifyContent:"center",
        margin:"5vh auto"
    }
})

export default function Hero() {
    const mobile = useMediaQuery('(max-width : 600px)')
    const classes = styles()
  return (
  <Box className={classes.main}  sx={{display:mobile? "block": "flex"}}>

      <Box  sx={{width:mobile? "100%": "60%", height:"100%"}}>

          <Box className={classes.right} sx={{height:"50%", width:"50%"}}>
          <img src='/img/laptop.png' height="100%" width="100%" alt="heroimg"/>
          
          </Box>
      </Box>

      <Box sx={{width:mobile? "100%": "40%",  py:"15px", color:"white"}}>
          <Typography borderBottom={true} className={classes.heading1}> <strong>BRESHNA MAKES GAMES AT</strong> </Typography>

          <Typography variant='h3' borderBottom={true} className={classes.heading2}>LIGHTNING SPEED </Typography>

          <Typography textAlign="justify" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus magnam quisquam vero accusantium nulla et, obcaecati quas facilis possimus sed eum maiores cupiditate magni quam ea ut. Eligendi, quos!</Typography>
          
          <Box sx={{mt:"2vh"}}>
            <Button variant="contained" sx={{m:"3px", bgcolor:"#7b3fd5"}}> <strong> Try For Free</strong></Button>&nbsp;&nbsp;
            <Button>  <FiPlay/> &nbsp; <strong> Watch tutorial</strong></Button>
          </Box>
      </Box>
      
  </Box>)
}
