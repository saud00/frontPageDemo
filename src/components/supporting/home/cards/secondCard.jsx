import React from 'react';
import { makeStyles } from '@mui/styles'
import { Box, Button, Typography, Paper } from '@mui/material'
import { AiFillStar } from "react-icons/ai";

const styles= makeStyles({
    left:{
        width:"50%"
    },
    right:{
        width:"50%",
        backgroundColor:"#0d2c3e",
        padding:"15px",
        position:"relative"
    },
    title:{
        fontWeight:600,
        fontFamily: 'Nexa',
        textShadow: "1px 0px 0px black"
    },
    des:{
        fontSize:"10px"
    },
    btnBox:{
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-end",
        width:"100%",
    },
    btnup:{
        marginTop:"5px",
        backgroundColor:"#773dd0",
        color:"white", 
        fontSize:"10px",
    },
    btnDown:{
        marginTop:"5px",
        backgroundColor:"#ea414b",
        color:"white", 
        fontSize:"10px"
    }
})

function DoubleCard(props) {
    const {name, des, id} = props
    // console.log(id)
    const classes = styles()
  return (
  <Box sx={{display:"flex", flexWrap:"noWrap", flexDirection:"row", width:"100%", contentFit:"fit"}}>
      <Box className={classes.left}>
          <img src={`/img/doubleCards/${id}.png`} height="100%" width="100%" alt="card"/>
      </Box>
      <Box className={classes.right}>
          <Typography color="#7b3fd5" fontWeight={600}>template</Typography>
          <Typography variant='h5' color="white" className={classes.title}>{name}</Typography>
          <Typography color="white" className={classes.des}>{des}</Typography>
          
          <Box className={classes.btnBox}>
            <Button  className={classes.btnup}> <AiFillStar/> &nbsp; <strong>Create</strong> </Button>
            <Button className={classes.btnDown} > <AiFillStar/> &nbsp; <strong>Preview</strong> </Button>
          </Box>

      </Box>
  </Box>
)}

export default DoubleCard;
