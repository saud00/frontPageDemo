
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Box} from '@mui/material';

export default function SliderCard({ val, page }) {

    return (
        <Box >
        {page === "forthSlider" ?
            <Card sx={{ width: "15rem", bgcolor:"#1d2633", color:"white" }}>
                <Box style={{ height: "12rem" }}>
                <CardMedia
                component="img"
                height="200"
                image={val.imgsrc}
                alt="img"
            />
                </Box>
                
                <CardContent  >
                    <Typography  variant="h5" component="Box" color="#b80f57" sx={{fontWeight:500,
                    fontFamily: 'Nexa',
                    textShadow: "1px 0px 0px white"}} >
                        {val.name}
                    </Typography>

                    <Typography variant="body2" color="white" sx={{textAlign:"justify"}}>
                    {val.comments}
                    </Typography>
            </CardContent>

            </Card>
             :
             <Card sx={{ width: "12rem",  color:"white" }}>
                <Box style={{ height: "12rem" }}>
                <CardMedia
                component="img"
                height="200"
                image={val.imgsrc}
                alt="img"
            />
                </Box>
                </Card>
                    }
      </Box>
  );
}
