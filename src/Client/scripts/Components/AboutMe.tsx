import * as React from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';

import classnames from 'classnames';

import Constants from '../Constants';

import {introCardStyle, keynumberTextStyle, introTextStyle, keynumberCardStyle, imgStyle} from '../../Styles/Components/StyleAboutMe';


const AboutMe: React.FC<{}> = () => {

   const {links: {github, linkedIn}, contents: {aboutMeContents}} = Constants;

   const {profileCard: {title, subtitle, profileImgSrc, bodyContents }} = aboutMeContents;

   const [resumeOpen, setResumeOpen] = React.useState<boolean>(false);

   const handleResumeClick = (): void => {
        setResumeOpen(!resumeOpen)
    }

    const renderContentLines = (contentLines: ReadonlyArray<string>): ReadonlyArray<React.ReactNode> => {
        return contentLines.map((content, i) => (
            <>
                {i > 0 && (<br/>)}
                {content}
            </>
        ))
    };

    // const renderKeyNumberCard = ():ReadonlyArray<React.ReactNode> => {
    //     // [important] use only 4 cards!!!
    //     return keynumberCards.map((card, i) => (
    //         <div className={classnames("col-sm-6", "col-md-3", "col-lg-6", "card-item-wrapper", `card${i}`)}>
    //             <Card style={keynumberCardStyle}>
    //                 <CardContent >
    //                     <Typography variant="h4" component="h4">
    //                         {card.keyNumber}
    //                     </Typography>
    //                     <Typography  color="textSecondary" style={keynumberTextStyle} gutterBottom>
    //                         {card.text}
    //                     </Typography>
    //                 </CardContent>
    //             </Card>
    //         </div>
    //     ))

    // };

   return (
        <>
            <div className="row aboutme-wrapper">
                <div className="col-sm-12 aboutme-title">
                    <span className="title-text">ABOUT ME</span>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-8 profile-wrapper">
                    <div className="col-sm-12 col-md-4 col-lg-4 image-wrapper" >
                        <CardMedia
                            image={profileImgSrc}
                            style={imgStyle}
                        />
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8 intro-wrapper">
                        <Card style={introCardStyle}>
                            <CardContent >
                                <Typography variant="h3" component="h3">
                                    {title}
                                </Typography>
                                <Typography  color="textSecondary" gutterBottom>
                                    {renderContentLines(subtitle)}
                                </Typography>
                                <Typography variant="body1" style={introTextStyle} component="p">
                                    {renderContentLines(bodyContents)}
                                </Typography>         
                            </CardContent>
                        </Card>
                    </div>
                </div>
                {/* <div className="col-sm-12 col-md-12 col-lg-4 card-row row">
                    {renderKeyNumberCard()}
                </div> */}
            </div>
            <div className="row links-wrapper">
                <div className="col-sm-12 col-lg-4 link-item">
                    <a href={github} target="_blank" title="Go to Github Repo">
                        <span className="link-item-text">Github</span>
                    </a>
                </div>
                <div className="col-sm-12 col-lg-4 link-item">
                    <a href={linkedIn} target="_blank" title="Go to Linkedin">
                        <span className="link-item-text">LinkedIn</span>
                    </a>
                </div>
                <div className="col-sm-12 col-lg-4 link-item">
                    <a className="resume-link" title="Download Resume" onClick={handleResumeClick}>
                        <span className="link-item-text">Resume</span>
                    </a>
                </div>
            </div>
            <Dialog fullWidth maxWidth='lg' open={resumeOpen} scroll='paper' onClose={handleResumeClick}>
                <embed className="resume-dialog" src="Uploads/resume.pdf" width="100%" height="800px"/>
            </Dialog>
            
        </>
    );
}

export default React.memo(AboutMe);