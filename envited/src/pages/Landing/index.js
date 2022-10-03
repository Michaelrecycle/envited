import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/create" className={`${classes.catButton} ${classes.desktop}`}> <div >
                    <span>🎉 Create my event</span>
                </div></Link>
            </div>

        </div>
        <div className={classes.landingImage}><img src={landingImage} alt="Overview of the app" /></div>
        <Link to="/create" className={`${classes.catButton} ${classes.mobile}`}>
            <div >
                <span>🎉 Create my event</span>
            </div>
        </Link>
    </div>);
}

export default Landing;