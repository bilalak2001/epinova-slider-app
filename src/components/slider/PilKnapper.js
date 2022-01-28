import React from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import useStyles from './PilKnappesStyles'

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
