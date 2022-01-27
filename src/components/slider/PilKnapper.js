import React from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  leftArrow: {
    position: "absolute",
    fontSize: "3rem",
    left: "32px",
    top: "50%",
    zIndex: "10",
    cursor: "pointer",
    userSelect: "none",
    color: "#FBFAD9",
    [theme.breakpoints.down('xs')]: {
      left: '0',
      top: '50%'
     },
  },
  rightArrow: {
    position: "absolute",
    fontSize: "3rem",
    right: "32px",
    top: "50%",
    zIndex: "10",
    cursor: "pointer",
    userSelect: "none",
    color: "#FBFAD9",
    [theme.breakpoints.down('xs')]: {
      right: '0',
      top: '50%'
    },
  },
}));

const PilKnapper = ({
  naverendeKomponentIndeks,
  setNaverendeKomponentIndeks,
  komponenterLength,
}) => {
  const classes = useStyles();

  const prevSlide = () => {
    setNaverendeKomponentIndeks(
      naverendeKomponentIndeks === 0 ? komponenterLength - 1 : naverendeKomponentIndeks - 1
    );
  };

  const nextSlide = () => {
    setNaverendeKomponentIndeks(
      naverendeKomponentIndeks === komponenterLength - 1 ? 0 : naverendeKomponentIndeks + 1
    );
  };

  return (
    <>
      <FaArrowAltCircleLeft className={classes.leftArrow} onClick={prevSlide} />
      <FaArrowAltCircleRight
        className={classes.rightArrow}
        onClick={nextSlide}
      />
    </>
  );
};

export default PilKnapper;
