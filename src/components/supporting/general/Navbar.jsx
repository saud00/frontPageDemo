import {useState, useEffect} from "react"
import { FaPhoneAlt,FaUser } from "react-icons/fa";
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { useMediaQuery } from "@mui/material";
import DrawerSide from "./Drawer";
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem } from '@mui/material';
import {NavLink} from 'react-router-dom'

function Nav() {
  const mobile = useMediaQuery('(min-width:600px)')
  const [open, setOpen] = useState(false)
    const [scroll, setScroll] = useState(0)

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      });

    if(mobile){
    return (
          <>
          <div className="nav1" >
                  <MenuItem className="calltext"> 
                    <Chip icon={<Avatar><FaPhoneAlt/></Avatar>} style={{color:"#b80f57"}} label="+92 313 5070127" clickable/> 
                  </MenuItem>
                  <MenuItem style={{ alignSelf:"center"}}>
                  <NavLink to="/" className={({isActive})=> isActive? "active" : "inActive" } >
                    <img  src="/img/logo.png" alt="logo" height={35} width={100}  />
                  </NavLink>
                  </MenuItem>
                  <MenuItem className="calltext">
                    <NavLink  className={({isActive})=> isActive? "active" : "inActive" } to="/Forms"> <Chip icon={<Avatar><FaUser/></Avatar>} ></Chip> </NavLink>
                 </MenuItem>
          </div>
        <div className="nav">
            <ul >
     
                <NavLink  className={({isActive})=> isActive? "active" : "inActive" } to="/" style={{display: scroll>150? "flex": "none",lineHeight:0}} >
                        <img src="/img/logo.png" alt="logo" height={35} width={100} />
                </NavLink>
                <NavLink to="/Contact" className={({isActive})=> isActive? "active" : "inActive" } >
                        Contact Us
                </NavLink>
                <NavLink  className={({isActive})=> isActive? "active" : "inActive" } to="/products" >
                        Market Products
                </NavLink>
                <NavLink  className={({isActive})=> isActive? "active" : "inActive" } to="/faq">
                        FAQ
                </NavLink>
                <NavLink  className={({isActive})=> isActive? "active" : "inActive" } to="/Forms" style={{display: scroll>150? "flex": "none",lineHeight:0}}>
                     <Chip icon={<Avatar><FaUser/></Avatar>} ></Chip>
                </NavLink>
                
            </ul>
          </div>
          </>
      )

    }else{

      return(
        <>
          <div className="nav">
            <ul >
              <li >  
                <MenuIcon onClick={()=>{setOpen(true)}}/>
                {open ? <DrawerSide setOpen={setOpen} open={open}/> : null }
              </li>
              <li style={{lineHeight:"10px"}}>
                <NavLink  className={({isActive})=> isActive? "active" : "inActive" } to="/">
                    <img src="/img/logo.png" alt="logo" height={25} width={100} />
                  </NavLink>
                </li>
                <li>
                    <NavLink  className={({isActive})=> isActive? "active" : "inActive" } to="Forms"> <Chip icon={<Avatar><FaUser/></Avatar>} ></Chip> </NavLink>
                </li>
              </ul>
          </div>
        </>
      )
    }
      
}

export default Nav
