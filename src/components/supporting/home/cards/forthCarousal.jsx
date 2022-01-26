import React, { useState } from "react";
import { makeStyles } from '@mui/styles'
import {  Box,Typography, Paper, Button,MobileStepper } from '@mui/material';
import { singleCards } from "./SlideData";
// import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SliderCard from "./sliderCard";

const styles = makeStyles({
  root: {
    width: "100%",
  },

  imgBox: {
    // display: "flex",
    flexDirection: "row",
    flexWrap: "noWrap",
    width: "100%",
  },
  stepper: {
    padding: "0 auto",
    width: "100%",
    height: "100%",
  },
  stepperBox: {
    marginTop: "-2.3vw",
    // paddingBottom:"1vw",
    maxWidth: 300,
    height: 30,
    margin: "0 auto",
    flexGrow: 1,
    zIndex: "-2",
  },
  gridLeft: {
    height: "100%",
    textAlign:"center",
  },
  gridMid: {
    textAlign:"center",
    height: "100%",
},
gridRight: {
    textAlign:"center",
    height: "100%",
    // width: "0vw",
  },
});

const Carousel = () => {

    const classes = styles();
    const len = singleCards.length - 1;
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(1);
    const [third, setThird] = useState(2);
    
    
    const left = () => {
        setFirst(first <= len ? 0 : (prevState) => prevState - 1);
        setSecond(second <= len ? 0 : (prevState) => prevState - 1);
        setThird(third <= len ? 0 : (prevState) => prevState - 1);
    };
    const right = () => {
        setFirst(first >= len ? 0 : (prevState) => prevState + 1);
        setSecond(second >= len ? 0 : (prevState) => prevState + 1);
        setThird(third >= len ? 0 : (prevState) => prevState + 1);
    };
  return (
    <Box className={classes.root} >
        <Box sx={{my:"2vw"}} >
          <Paper elevation={8} sx={{display:"flex", flexWrap:"noWrap", backgroundColor:"inherit",justifyContent:"space-around", columnGap:"5px"}}>
            {singleCards.map((val) => val.id === first && <SliderCard val={val} page="thirdSlider" />)}
            {singleCards.map((val) => val.id === second && <SliderCard val={val} page="thirdSlider" />)}
            {singleCards.map((val) => val.id === third && <SliderCard val={val} page="thirdSlider" />)}
          </Paper>
      </Box>
      <Box className={classes.stepperBox}>
        <DotsMobileStepper
          setSecond={setSecond}
          second={second}
          left={left}
          right={right}
        />
      </Box>
    </Box>
  );
};

function DotsMobileStepper({ second, left, right }) {
  const classes = styles();

  const handleNext = () => {
    right();
  };

  const handleBack = () => {
    left();
  };

  return (
    <MobileStepper
      variant="dots"
      sx={{bgcolor:"inherit", color:"white"}}
      steps={4}
      position="static"
      activeStep={second}
      className={classes.stepper}
      nextButton={
        <Button size="small" onClick={handleNext} >
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} >
          <KeyboardArrowLeft />
        </Button>
      }
    />
  );
}

export default Carousel;
