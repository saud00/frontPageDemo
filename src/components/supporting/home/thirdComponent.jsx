import React from 'react';
import { useMediaQuery } from "@mui/material";
import { makeStyles } from '@mui/styles'
import { Box, Button, Typography, Paper } from '@mui/material'
import MainCard from './cards/thirdCards';

const styles = makeStyles({
    main:{
        margin:"5vh 0"
    },
    titleBig:{
        fontWeight:"600",
        fontFamily:"Nexa",
        textShadow:"0px 0px 1px white",
        color:"white",
        textTransform:"uppercase"
    },
    titleSmall:{
        fontWeight:"600",
        textShadow:"1px 0px 0px black",
        color:"#81609a",
        fontSize:"12px"
    },
    btnsDiv:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"nowrap",
        justifyContent:"space-between",
        margin:"6vh 0",
    },
    activeBtn:{
        fontSize:"11px", height:"30px", backgroundColor:"#f63989", margin:"0 3px"
    },
    otherBtn:{
        fontSize:"11px", height:"30px", backgroundColor:"#833bda",margin:"0 3px"
    },
    card:{
        margin:"3vh 0",
        // padding:"3rem" ,
        width:"100%",
        backgroundColor:"inherit"
    }

})

const data=[
    {
        name:"Education",
        des:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut voluptatibu amet consectetur adipisicing elit. Ut voluptatibus",
    },
    {
        name:"Social & Entertainment",
        des:"Lorem ipsum dolor, sit amet consectetur adipisicin oluptatibus, hic illoamet consectetur adipisicing elit. Ut voluptatibus",
    },
    {
        name:"Enterprise",
        des:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut voluptatibus, hoamet consectetur adipisicing elit. Ut voluptatibus",
    },
    {
        name:"Health",
        des:"Lorem ipsum doloit amet consectetur adipisicing elit. Ut voluptatibus, hic illoamet consectetur adipisicing elit. Ut uptatibus",
    },
]

export default function ThirdComponent() {
    const classes = styles()
    const mobile= useMediaQuery('(max-width:600px)')

    const buttons = ["Education","Social Entertainment", "Enterprise", "Health"]
    const[activeBtn, setActiveBtn] = React.useState('Education')
   
  return (
  <Box>
      <Box>

          <Typography gutterBottom={true} className={classes.titleSmall}>Build no-code video games on BRESHNA</Typography>
          <Typography variant='h5' className={classes.titleBig}>Get inspired!</Typography>

      </Box>

      <Box className={classes.btnsDiv} sx={{width: mobile? "100%":"50%"}}>

            {buttons.map(val=> 
            <Button name={val} variant="contained" size='small' className={activeBtn === val? classes.activeBtn : classes.otherBtn} onClick={(e)=>{setActiveBtn(e.target.name)}} >
                {val}
            </Button>
            )}
          
      </Box>

      <Box className={classes.card}>
          {data.map((val,ind)=>{
              return(
              <Box sx={{mb:"5rem"}} key={ind}>
                <MainCard name={val.name} des={val.des}/>
            </Box>
                )}
            )}
      </Box>

  </Box>
  )
}
