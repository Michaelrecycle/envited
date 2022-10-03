import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import classes from "./index.module.scss"
const InfoWidget = ({ icon, heading, description }) => {
    return (<div className={classes.container}>
        <div className={classes.contentContainer}>
            <div className={classes.iconContainer}>
                <div className={classes.icon}><img src={icon} /></div>
            </div>
            <div className={classes.content}>
                <div className={classes.info}>
                    <h3>{heading}</h3>
                    {description}
                </div>
            </div>
        </div>
        <FaAngleRight className={classes.angle} />
    </div>);
}

export default InfoWidget;