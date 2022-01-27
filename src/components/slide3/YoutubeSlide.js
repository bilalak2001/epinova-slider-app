import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import YoutubeData from "./youtubedata/YoutubeData";
import { makeStyles } from "@material-ui/core/styles";

const YOUTUBE_VIDEOS_API = "https://www.googleapis.com/youtube/v3/videos";
const API_KEY = '{DIN_API_KEY}'; //Her legges API som generes fra Gooogle API
const linkId  = 'dQw4w9WgXcQ'; //linkId fra youtube url 'f.eks https://www.youtube.com/watch?v=UVhIMwHDS7k' så er linkId = 'UVhIMwHDS7k'


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
}
}));




const YoutubeSlide = () => {
  const [youtubeData, setYoutubeData] = useState([]);
  const [youtubeURL, setYoutubeUrl] = useState("");

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${YOUTUBE_VIDEOS_API}?part=snippet&id=${linkId}&key=${API_KEY}`
        );
        const data = (await res.json()).items;
        const utledetVideoData = data.map((obj) => obj.snippet);
        const utledetVideoURL = data.map(
          (obj) => "https://www.youtube.com/embed/" + obj.id
        );
        setYoutubeData(utledetVideoData);
        setYoutubeUrl(utledetVideoURL);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return <>
    {youtubeData.length === 0 ? <RenderDefaultReactPlayer classes={classes}/> : <YoutubeData youtubeData={youtubeData} youtubeURL={youtubeURL}/>}
    </>
  
}

export default YoutubeSlide;

const RenderDefaultReactPlayer = ({classes}) => {
  return (
  <div className={classes.playerWrapper}>
    <ReactPlayer
      className={classes.reactPlayer}
      url={"https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=48s"}
      width="100%"
      height="50vh"
      playing={true}
      controls={true}
    />
  </div>
  );
}


