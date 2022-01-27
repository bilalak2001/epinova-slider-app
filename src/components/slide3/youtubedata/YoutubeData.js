import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import YoutubeKort from "./youtubekort/YoutubeKort";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '50px 12px'
  },
  container: {
    width: '100%',
    margin: 'auto',
  },
  playerWrapper: {
    position: 'relative',
    border: '2px solid #FBFAD9',
    borderRadius: '5px',
    width: 'auto',
    height: 'auto'
  },
  reactPlayer: {
    width: 'auto',
    height: 'auto'
}
}));


const YoutubeData = ({ youtubeData, youtubeURL }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <RenderYoutubeKort youtubeData={youtubeData} youtubeURL={youtubeURL}/>
      </div>
    </div>
  );
};

export default YoutubeData;

const RenderYoutubeKort = ({ youtubeData, youtubeURL }) => {
  return (
    <>
      {youtubeData.map((v, index) => {
            return (
              <YoutubeKort
              key={index}
              title={v.title}
              publishedAt={v.publishedAt}
              channelTitle={v.channelTitle}
              youtubeURL={youtubeURL}
              />
              );
            })
        }
    </>
  );
};
