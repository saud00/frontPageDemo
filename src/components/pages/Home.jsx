import React from 'react';
import Hero from '../supporting/home/hero';
import SecondComponent from '../supporting/home/secondComponent';
import { makeStyles } from '@mui/styles'
import ThirdComponent from '../supporting/home/thirdComponent';
import ForthComponent from '../supporting/home/forthComponent';

const styles=makeStyles({
  container:{
    backgroundColor:"#271939",
    padding:"5vh 4vw",
    margin:0
  }
})

export default function Home() {
  const classes = styles()
  return <div className={classes.container}>
      <Hero/>
      <SecondComponent/>
      <ThirdComponent/>
      <ForthComponent/>
  </div>;
}
