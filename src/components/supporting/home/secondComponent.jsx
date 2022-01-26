import React from 'react';
import { useMediaQuery } from "@mui/material";
import { makeStyles } from '@mui/styles'
import { Box, Button, Typography, Paper } from '@mui/material'
import DoubleCard from './cards/secondCard';

const styles = makeStyles({
    main:{
        display:"block",
        padding: "0 2vw",

    },
    typo:{
        textTransform:"uppercase",
        fontWeight:600,
        fontFamily: 'Nexa',
        textShadow: "0px 0px 1px white"
    }
})

const data = [
    {
        id: 1,
        name: "Myth Buster",
        des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto reiciendis" 
    },
    {
        id: 2,
        name:"Run & Jump",
        des:"reprehenderit quisquam velit possimus praesentium quas doloremque, ratione, "
    },
    {
        id: 3,
        name:"Guess The Word",
        des:"reprehenderit quisquam velit possimus praesentium quas doloremque, ratione, "
    },
    {
        id: 4,
        name:"Catch The Answer",
        des:"sunt ea similique, consequatur quibusdam. Amet enim magni labore iste laborum."
    },
    {
        id: 5,
        name:"Space Games",
        des:"reprehenderit quisquam velit possimus praesentium quas doloremque, ratione, "
    },
]

export default function SecondComponent() {
    const mobile = useMediaQuery('(max-width:600px)')
    const classes = styles()
  return (
  <Box className={classes.main} sx={{my:"5vh"}}>
      <Box sx={{textAlign:"center", mb:"2vh", color:"white"}}>
          <Typography variant={mobile?'h6':"h4"} className={classes.typo}>BRESHNA empowers everyone to create their own version of video game</Typography>
          <Typography>BRESHNA creates games with no code and at lightning speed.</Typography>
      </Box>
      <Box sx={{my:"9vh"}}>
          <Paper elevation={8} sx={{display:"flex", flexWrap:"wrap", flexDirection:"row", borderRadius:"25px" ,justifyContent:"space-around", bgcolor:"inherit",  p:"1rem"}}>
              {data.map((val,ind)=>{
                  return (
                  <Paper elevation={8} key={ind} sx={{height:"12rem", width:"24rem", mb:"5rem"}}>
                      <DoubleCard name={val.name} des={val.des} id={val.id}/>
                  </Paper>
              )})}
          </Paper>
      </Box>
  </Box>
  );
}
