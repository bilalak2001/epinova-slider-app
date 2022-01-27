import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import image from '../../static/image';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
    background:"rgba(0,0,0,0.5)",
    textAlign: 'center',
    borderRadius: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  },
  media: {
    height: 440,
    "@media screen (max-width: 600px)": {
        maxWidth: '100%',
        maxHeight: '100%',
        display: 'block'
    }
  },
  title: {
      fontFamily: 'Nunito',
      fontWeight: "bold",
      fontSize: "2rem",
      color: "#FBFAD9",
  },
  description: {
    fontFamily: 'Nunito',
    fontSize: "1.1rem",
    color: "#ddd",
  }
}));

const BildeKort =  () => {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={image.imageUrl}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          > {image.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}
          > {image.description}
          </Typography>
        </CardContent>
      </Card>
  );
}

export default BildeKort;