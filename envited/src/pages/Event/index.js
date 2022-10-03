import React from 'react';
import birthdayCake from "../../assets/birthday-cake.png"
import InfoWidget from '../../components/InfoWidget';
import classes from "./index.module.scss"
import CalendarIcon from "../../assets/icons/calendar.svg"
import locationIcon from "../../assets/icons/location.svg"


const Event = () => {
    return (<div className={classes.container}>
        <img src={birthdayCake} alt="birthday cake" className={classes.cakeImage} />
        <div className={classes.content}>
            <div className={classes.heading}><h1>Birthday Bash</h1>
                <p>Hosted by <strong style={{ fontWeight: "bold" /*Bug with helvetica font*/ }}>Elysia</strong></p>
            </div>
            <div className={classes.infoContainer}>
                <InfoWidget icon={CalendarIcon} heading="18 August 6:00PM" description={<p>to <strong style={{ fontWeight: "bold" }}>19 August 1:00PM</strong> UTC +10</p>} />
                <InfoWidget icon={locationIcon} heading="Street name" description={<p>Suburb, State, Postcode</p>} />
            </div>
        </div>
    </div>);
}

export default Event;