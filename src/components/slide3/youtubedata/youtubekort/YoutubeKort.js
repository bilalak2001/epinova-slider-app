import { CircularProgress } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";
import useStyles from './YoutubeKortStyles';

const YoutubeKort = ({
  title,
  publishedAt,
  channelTitle,
  youtubeURL,
}) => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>
      <RenderReactPlayer youtubeURL={youtubeURL} classes={classes}/>
      <div className={classes.date}>published at {publishedAt} by {channelTitle} </div>
    </div>
  );
};

export default YoutubeKort;


const RenderReactPlayer = ({ youtubeURL, classes }) => {

  return (
    <div className={classes.playerWrapper}>
      {youtubeURL === null ? (
        <CircularProgress />
      ) : (
        <ReactPlayer
          url={youtubeURL}
          width="100%"
          height="50vh"
          playing={true}
          controls={true}
        />
      )}
    </div>
  );
};
