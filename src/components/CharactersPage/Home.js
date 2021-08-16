import { CardContent, Typography, CardMedia, Card } from '@material-ui/core';
import React from 'react'
import CharacterStyle from './CharacterStyle.css';


const Character = ({name, image, status, gender, location, species, episode, type}) => (
    <Card className="character" >
        <CardMedia className="character_image"
         component = "img"
         image = {image}
         alt="name"
         height="200"
         max-width= "100%"
         />
         <CardContent className="content">
         <Typography  variant="body1" color="textSecondary" component="p">
             <h2>{name}</h2>
         </Typography>
         <Typography variant="body2" color="textSecondary" component="li">
            {status}
         </Typography>
         <Typography variant="body2" color="textSecondary" component="li">
             {gender}
         </Typography>
         <Typography classNmae="char_overview">
               <h4>Overview:</h4>
               <p>Spicy: {species}</p>
               <p>location: {location.name}</p>
               <p>Watch here: <a href={episode}>{episode}</a></p>
         </Typography>
         </CardContent>
    </Card>
)


export default Character;