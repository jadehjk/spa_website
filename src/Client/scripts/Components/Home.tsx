import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import Constants from '../Constants';

import {imageStyle} from '../../Styles/Components/StyleHome';

const Home: React.FC<{}> = () => {

   const {
      routes: {
         aboutMe,
         projects
      },
      contents: {
         homeContents : {
            homeContentTitle1,
            homeContentTitle2,
            homeImgSrc1,
            homeImgSrc2
         }
      }
   } = Constants;

   return (
      <div className="home-wrapper">
         <Grid className="home-grid-row" container spacing={9} style={{justifyContent: 'center'}}>
            <Grid item xs={12} lg={6} className="home-grid-col">
               <CardActionArea className="card-wrapper">
                  <Link to={aboutMe}>
                  <div className="home-image-wrapper">
                     <CardMedia
                        style={imageStyle}
                        image={homeImgSrc1}
                        title="About Me"
                     />
                     <div className="image-text">{homeContentTitle1}</div>
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
                        image={homeImgSrc2}
                        title="PROJECTS"
                     />
                     <div className="image-text">{homeContentTitle2}</div>
                  </div>
                  </Link>
               </CardActionArea>
            </Grid>
         </Grid>
      </div>
    );
}

export default React.memo(Home);