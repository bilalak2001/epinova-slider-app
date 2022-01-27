import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appBar: {
    background: "none",
  },
  appBarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#FBFAD9",
    fontSize: "4.5rem",
  },
  goDown: {
    color: '#990000',
    fontSize: "4rem",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.appBarWrapper}>
          <h1 className={classes.appBarTitle}> Slider App</h1>
        </Toolbar>
      </AppBar>

      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br /> the slideshow !
          </h1>
          <Scroll to="scroll-to-slider" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
