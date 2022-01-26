import React from 'react';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import { Avatar, Chip } from '@mui/material';
import { MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    drawer:{
        flexShrink: 0,
        zIndex:11 ,
        
    }, drawerPaper: {
        width: '50vw',
        display: "block",
        overflow: "auto",
        backgroundColor: "#19242f",
    },
    drawerCloseIcon:{
        margin:"10px 0",
        display:"flex",
        justifyContent:"flex-end",
    },
    a:{
          fontFamily:"Helvetica-Neue",
          textTransform:"upperCase",
          fontWeight:"bold",
          fontSize:"15px",

      }
})
  
function DrawerSide(props) {
    const classes = useStyles()  
    const navigate = useNavigate()
    
    function handleClose(){
        props.setOpen(false)
    }  
    return (
        <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ marginLeft: "15px", width: "35%" }}>
            <CssBaseline />
            <Drawer
              variant="persistent"
              anchor="left"
              open={props.open}
              className={classes.Drawer}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerCloseIcon}>
                <IconButton onClick={handleClose} style={{color:"white"}} >
                    <Chip icon={<Avatar><ChevronLeftIcon /></Avatar>}> </Chip>
                  
                </IconButton>
              </div>
              <Divider />

              <ListItem className={classes.a}>
                  <MenuItem onClick={()=>{navigate('/')}}>Home</MenuItem>
              </ListItem>
              <Divider />
              <ListItem className={classes.a}>
                  <MenuItem onClick={()=>{navigate('/products')}}>Market product</MenuItem>
              </ListItem>
              <Divider />
              <ListItem className={classes.a}>
                  <MenuItem onClick={()=>{navigate('/faq')}}>FAQ</MenuItem>
              </ListItem>
              <Divider />
              <ListItem className={classes.a}>
                  <MenuItem onClick={()=>{navigate('/Contact')}}>Contact Us</MenuItem>
              </ListItem>
              <Divider />
              
              <Divider />
            </Drawer>
          </span>
        </div>
      </div>
    )
}

export default DrawerSide
