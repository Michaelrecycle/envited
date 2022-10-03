import React from 'react';
import classes from "./index.module.scss"
import birthdayCake from "../../assets/birthday-cake.png"
import CalendarIcon from "../../assets/icons/calendar.svg"
import locationIcon from "../../assets/icons/location.svg"
import InfoWidget from '../../components/InfoWidget';
import { Link } from 'react-router-dom';

const Form = () => {
    return (<div className={classes.container}>
        <div className={classes.imageUpload}><img src={birthdayCake} alt="birthday cake" className={classes.cakeImage} />
            <div className={classes.imageInputContainer}><span>Event Image</span><input type="file" className={classes.imageInput} /></div>
        </div>
        <div className={classes.content}>
            <div className={classes.heading}><input placeholder='Event name' autoFocus className={classes.eventInput} />
                <input className={classes.hostInput} placeholder='Host name' />


            </div>
        </div>
        <div className={classes.infoContainer}>
            <InfoWidget icon={CalendarIcon} headingInput={<input type="datetime-local" className={classes.input} />} descriptionInput={<input type="datetime-local" className={classes.input} />} editMode />
            <InfoWidget icon={locationIcon} headingInput={<input placeholder='Street Name' className={classes.input} />} descriptionInput={<input placeholder='Suburb, State, Postcode' className={classes.input} />} editMode />

        </div>
        <Link to="/event"> <div className={classes.nextButton}>
            <span>Next</span>
        </div></Link>
    </div>);
}

export default Form;