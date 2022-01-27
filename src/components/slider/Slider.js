import React, { useState } from "react";
import BildeKort from "../slide1/BildeKort";
import RenderUserLocationOrSocialCards from "../slide2/RenderLokasjonEllerBrukerData";
import YoutubeSlide from "../slide3/YoutubeSlide";
import PilKnapper from "./PilKnapper";
import useStyles from "./SliderStyles";

const komponenter = [
    <BildeKort />,
    <RenderUserLocationOrSocialCards />,
    <YoutubeSlide />
];

const Slider = () => {
  const classes = useStyles();
  const komponenterLength = komponenter.length;
  const [naverendeKomponentIndeks, setNaverendeKomponentIndeks] = useState(0);

  const renderSlideKomponentene = () => {
    return komponenter.map((item, index) => {
      return (
        <div key={index} className={naverendeKomponentIndeks === index ? classes.slideActive : classes.slide} >
          {naverendeKomponentIndeks === index && komponenter[index]}
        </div>
      );
    });
  }

  return (
    <div className={classes.root} id="scroll-to-slider">
      <PilKnapper setNaverendeKomponentIndeks={setNaverendeKomponentIndeks} naverendeKomponentIndeks={naverendeKomponentIndeks} komponenterLength={komponenterLength}/>
            {renderSlideKomponentene()}
    </div>
  );

};

export default Slider;
