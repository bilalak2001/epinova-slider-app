import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  location: {
      margin: '1rem 0',
      fontSize: '14px',
      fontFamily: 'Nunito',
      color: '#FBFAD9'
  },
  p: {
      margin: '0',
  }
}));

const BrukerLokasjonData = ({ location}) => {
    const classes = useStyles();
    return (
        <div className={classes.location}>
            <p className={classes.p}> {location.street.number} , {location.street.name}</p>
            <p className={classes.p}> {location.city}</p>
            <p className={classes.p}> {location.postcode}</p>
            <p className={classes.p}> {location.country}</p>
        </div>
    );
}

export default BrukerLokasjonData;