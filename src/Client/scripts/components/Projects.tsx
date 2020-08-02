import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Constants from '../Constants';

import IProjectCard from '../../Models/IProjectCard';

import {projectWrapperStyles, imageStyle, cardStyle} from '../../Styles/Components/StyleProjects';


const Projects: React.FC<{}> = () => {

    const {contents: {projectsContents: {projectCards}}} = Constants;

    const renderSubheader = (lines: ReadonlyArray<string>): React.ReactNode => {
        return (
            <Typography variant="body2" color="textSecondary" style={{lineHeight : '1.2'}}>
                {lines.map((line, i) => (
                    <>
                    {i > 0 && (<br/>)}
                        {line}
                    </>  
                    ))
                }
            </Typography>
        );
    };

    const renderMedia = (projectCard: IProjectCard): React.ReactNode => {
        if(projectCard.type === 'image') {
            return (
                <CardMedia
                    image={projectCard.src}
                    style={imageStyle}
                />
            )
        } else {
            const {videoOptions: {autoPlay, loop, controls}} = projectCard;
            return (
                <CardMedia
                    component="video"   
                    image={projectCard.src}
                    autoPlay={autoPlay}
                    loop={loop}
                    controls={controls}
                />
            )
        }
    };

    const renderContentList = (lines: ReadonlyArray<string>): React.ReactNode => {
        return (
            <ul>
                {lines.map(line => (
                    <li>
                        {line}
                    </li>
                ))}
            </ul>
        )
    };

    const renderProjectCards = ():ReadonlyArray<React.ReactNode> => {
        return projectCards.map(projectCard => (
            <Grid item xs={10} md={5} className="home-grid-col">
                <Card style={cardStyle}>
                    <div className="header-wrapper">
                        <CardHeader
                            title={projectCard.header}
                            subheader={renderSubheader(projectCard.subHeader)}
                        />
                    </div>
                    {renderMedia(projectCard)}
                    <CardContent>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                            {renderContentList(projectCard.cardContent)}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        ));
    };

    return (
        <>
            <Grid className="projects-wrapper" container spacing={4} style={projectWrapperStyles}>
                {renderProjectCards()}
            </Grid>
        </>
   );
};

export default Projects;