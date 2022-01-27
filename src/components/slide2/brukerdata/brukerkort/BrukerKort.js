import React from "react";
import BrukerLokasjonData from "./BrukerLokasjonData";
import useStyles from './BrukerKortStyles'

const BrukerKort = ({ userData }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}> {userData.name.first} {userData.name.last}</div> 
                    <BrukerLokasjonData location={userData.location}/>
                    <div>
                        <p className={classes.telefon}> Mobile: {userData.cell} </p>
                    </div>
                    <div className={classes.image}>
                        <img className={classes.img} src={userData.picture.medium} alt=""/>
                    </div>
            </div>   
    )
};

export default BrukerKort;

