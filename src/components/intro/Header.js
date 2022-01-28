import {
  AppBar,
  Button,
  Collapse,
  IconButton, Toolbar,
  Typography
} from "@material-ui/core";
import useStyles from './HeaderStyle';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";
import HeaderMobil from "./HeaderMobil";


const Header = () => {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();
  const [width, setWidth] = useState(window.innerWidth);

  const breakpoint = 920;

  useEffect(() => {
    setChecked(true);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
}, []);

  return (
     <div className={classes.root}>
       <AppBar className={classes.appBar}>
         <Toolbar className={classes.appBarWrapper}>
           <Typography className={classes.appBarTittel}>Slider App</Typography>
           {width < breakpoint  ?  <HeaderMobil /> : <RenderButtons classes={classes}/>}
           </Toolbar>
       </AppBar>

      <Collapse in={checked} timeout={1000}>
        <div className={classes.container}>
          <h1 className={classes.tittel}>
            Welcome to <br /> the slideshow !
          </h1>
          <Scroll to="scroll-to-slider" smooth={true}>
            <IconButton >
              <ExpandMoreIcon className={classes.gaNed} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};

const RenderButtons = ({classes}) => {
  return <div className={classes.buttonWrapper}>
    <Button className={classes.faneTittel}> Tjenester </Button>
    <Button className={classes.faneTittel}> Tilbud </Button>
    <Button className={classes.faneTittel}> Kontakt oss </Button>
    <Button className={classes.faneTittel}> FAQ </Button>
  </div>;
}


export default Header;
