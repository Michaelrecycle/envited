import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import classes from "./index.module.scss"
const InfoWidget = ({ icon, heading, description, editMode, headingInput, descriptionInput }) => {
    return (<div className={classes.container}>
        <div className={classes.contentContainer}>
            <div className={classes.iconContainer}>
                <div className={classes.icon}><img src={icon} /></div>
            </div>
            <div className={classes.content}>
                <div className={classes.info}>
                    {editMode ? headingInput : <h3>{heading}</h3>}
                    {editMode ? descriptionInput : description}
                </div>
            </div>
        </div>
        {!editMode && <FaAngleRight className={classes.angle} />}
    </div>);
}

export default InfoWidget;  