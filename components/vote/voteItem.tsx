import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const VoteItem = (props:any) => {
    return (
      <Card 
        sx={{ maxWidth: 275, minHeight: 300 }}
        variant="outlined"> 
         <CardActionArea>
            <CardMedia
                component="img"
                image="/farm.jpg"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Vote Item #1
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
        </CardActions>
        </Card>
    );
 }; 

 export default VoteItem; 