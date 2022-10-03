import React from 'react';
import landingImage from "../../assets/landing-image.svg"
import classes from "./index.module.scss"

const Landing = () => {
    return (<div className={classes.container}>

        <div className={classes.contentContainer}>
            <div className={classes.content}>
                <div className={classes.headings}>
                    <h1 className={classes.heading}>Imagine if</h1>
                    <h1 className={classes.gradientHeading}>Snapchat</h1>
                    <h1 className={classes.heading}>had events.</h1>
                </div>
                <p className={classes.description}>Easily host and share events with your friends across any social media.</p>
                <div className={`${classes.catButton} ${classes.desktop}`}>
                    <span>🎉 Create my event</span>
                </div>
            </div>

        </div>
        <div className={classes.landingImage}><img src={landingImage} alt="Overview of the app" /></div>
        <div className={`${classes.catButton} ${classes.mobile}`}>
            <span>🎉 Create my event</span>
        </div>
    </div>);
}

export default Landing;