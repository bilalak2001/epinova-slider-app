import { useEffect, useState } from "react"
import BrukerData from "./brukerdata/BrukerData";
import Lokasjon from "./lokasjon/Lokasjon";

const RenderUserLocationOrSocialCards = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const breakpoint = 602;

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return width < breakpoint ? <Lokasjon /> : <BrukerData />
}

export default RenderUserLocationOrSocialCards;