import React, { useState } from "react";
import { Box, Paper } from '@mui/material';
import { CardSlideData } from "./SlideData";
import SliderCard from "./sliderCard";


const Caro = () => {
    let page;
    const len = CardSlideData.length - 1;
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(1);
    const [third, setThird] = useState(2);
  
    const next = () => {
        setFirst(first >= len ? 0 : (prevState) => prevState + 1);
        setSecond(second >= len ? 0 : (prevState) => prevState + 1);
        setThird(third >= len ? 0 : (prevState) => prevState + 1);
        console.log("fi",first, "se",second, "th", third)
    };
  
    React.useEffect(() => {
      const interval = setTimeout(() => {
        next();
      }, 3000);
      return () => clearTimeout(interval);
    }, [first, second, third]);
  
    return (
      <Box  >
          <Paper elevation={8} sx={{display:"flex", flexWrap:"wrap", backgroundColor:"#1b1f2c",justifyContent:"space-around"}}>
            {CardSlideData.map((val) => val.id === first && <SliderCard val={val} page="forthSlider" />)}
            {CardSlideData.map((val) => val.id === second && <SliderCard val={val} page="forthSlider" />)}
            {CardSlideData.map((val) => val.id === third && <SliderCard val={val} page="forthSlider" />)}
          </Paper>
      </Box>
    );
  };

  export default Caro;