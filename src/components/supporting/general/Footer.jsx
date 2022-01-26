import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import {useNavigate, Link} from 'react-router-dom'
import { useMediaQuery } from "@mui/material";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import React from 'react'

const styled = makeStyles({
    root:{
        display : "block",
        width: "100%",
    },
    call:{
        width:"100%",
        display:"flex", flexDirection:"row", flexWrap:"nowrap",
        backgroundColor: "#19242f",
        color:"white",  justifyContent:"center", lineHeight:"9vh", alignItems:"center"
    },
    body:{
        backgroundImage: `url("/img/map.png")`,
        backgroundSize: "cover",
        // height:"40vh",
        width:"100%",
        display:"flex", 
        justifyContent:"space-around",
        color:"silver",
    },
    heading:{
        display:"table-cell",
        textTransform:"upperCase",
        // marginTop:"2vh",
        // marginBottom:"2vh",
        listStyleType:"none",
        // transform:'scale(.9,.9)'
    },
    list:{
        listStyleType:"none",
        marginBottom:"1vh"  

    },
    contact:{
        display:"flex",   height:"5vh", width:"40vw",  justifyContent:"space-evenly",
        "&:hover":{"$ $a":{ color:"white"}}
    },
    social:{
        // height:"20vh",
         display:"flex", flexWrap:"wrap",
        width:"80vw",
        margin:"0px auto",
        // backgroundColor: "#19242f",
        // backgroundColor: "#29242f",
        alignItems:"stretch"
    },
    calldv:{
        flexGrow:1,textAlign:"center"
    },
    socialIcon:{
        display:"flex", flexDirection:"row", justifyContent:"space-evenly", width:"100%", marginTop:"2rem"
    },
    zoomIcon:{
        transition:'transform 1s',
        "&:hover":{transform:'scale(1.5,1.5)', color:"#b80f57"}
    }
})
function Footer() {
    const classes = styled()
    const mobile = useMediaQuery('(max-width:600px)')
  
    return (
        <div className={classes.root} data-aos="fade-up" data-aos-duration="3000">
           
            <div className={classes.call}>
               <div > <FaPhoneAlt/> </div >  &nbsp; &nbsp; &nbsp; <div > <Typography variant="body2" >Call a BRESHNA gamers <u style={{cursor:"pointer", color:"#b80f57"}}>+61 3 8648 8871</u></Typography> </div >
                
            </div>

            <div style={{width:"100%", display:"block", backgroundColor: "#19242f"}}>
                <div className={classes.social} >

                    <div style={{width: mobile? "80%": "40%", padding:"2rem"}} > 
                        <img  src="/img/logo.png" alt="logo" height={25} width={100}  />
                        <Typography textAlign="justify" color="white">The starting point for your next project based on easy-to-customize Material-UI helps you build apps faster and better</Typography>
                        <div className={classes.socialIcon}>
                            <span className={classes.zoomIcon}><FaTwitter size={mobile? "1em": "1.5em"} color="white"/></span>
                            <span className={classes.zoomIcon}><FaLinkedinIn size={mobile? "1em": "1.5em"} color="white"/></span>
                            <span className={classes.zoomIcon}><FaFacebookF size={mobile? "1em": "1.5em"} color="white"/></span>
                            <span className={classes.zoomIcon}><FaInstagram size={mobile? "1em": "1.5em"} color="white"/></span>
                        </div>
                    </div>

                    <div  style={{width: mobile? "80%": "40%", padding:"2rem"}}>
                       <span style={{ display:'flex', alignItems:"center", color:"white"}}> <FiMail size="8%" color="#b80f57"/> &nbsp;&nbsp;&nbsp; <Typography>info@gamingfordev.com</Typography> </span>
                    </div>
            </div>
                <div style={{textAlign:"center", color:"grey"}}>
                    <Typography variant="subtitle2">© 2022 BRESHNA Ltd – we are the future of games</Typography>
                </div>
            </div>
        </div>
    )
}

export default Footer
