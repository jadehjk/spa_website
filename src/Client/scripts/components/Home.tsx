import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Constants from '../Constants';

import homeImage1 from '../../Images/homeImage1.jpg';
import homeImage2 from '../../Images/homeImage2.png';

const Home: React.FC<{}> = () => {

   const {routes: {aboutMe,projects}} = Constants;

   const imageStyle = {
      height: 0, 
      paddingTop: '70.25%',
      verticalAlign: 'middle',
      opacity: 0.95
   };

   return (
      <div className="home-wrapper">
         <Grid className="home-grid-row" container spacing={4}>
            <Grid item xs={12} lg={6} className="home-grid-col">
               <CardActionArea className="card-wrapper">
                  <Link to={aboutMe}>
                  <div className="home-image-wrapper">
                     <CardMedia
                        style={imageStyle}
                        image={homeImage1}
                        title="About Me"
                     />
                     <div className="image-text">ABOUT ME</div>
                  </div>
                  </Link>
               </CardActionArea>
            </Grid>
            <Grid item xs={12} lg={6} className="home-grid-col">
               <CardActionArea className="card-wrapper">
                  <Link to={projects}>
                  <div className="home-image-wrapper">
                     <CardMedia
                        style={imageStyle}
                        image={homeImage2}
                        title="PROJECTS"
                     />
                     <div className="image-text">PROJECTS</div>
                  </div>
                  </Link>
               </CardActionArea>
            </Grid>
         </Grid>
      </div>
    );
}

export default React.memo(Home);