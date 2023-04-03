import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import css from "./Destination.module.css";
import data from "../../data/data.json";

import DestinationWrapper from "./destinationContainer/DestinationContainer";
import InfoCard from "./infoCard/InfoCard";
import PlanetButtons from "./planetButtons/PlanetButtons";
import PlanetInfo from "./planetInfo/PlanetInfo";

export default function Destination() {
  const { planet } = useParams();
  const [current, setCurrentDestination] = useState(
    data.destinations.find(
      (destination) => destination.name.toLowerCase() === planet
    )
  );
  const basePath = "/destination";

  useEffect(() => {
    setCurrentDestination(
      data.destinations.find(
        (destination) => destination.name.toLowerCase() === planet
      )
    );
  }, [planet]);

  const transitions = useTransition(current, {
    from: { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0%, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
    exitBeforeEnter: true,
  });

  return (
    <DestinationWrapper>
      <p className={css.text}>
        <span className={css.textColor}>01</span>Pick your destination
      </p>
      <InfoCard>
        {transitions((style, item) => (
          <animated.div style={style}>
            <img src={item.images.png} alt={item.name} className={css.image} />
          </animated.div>
        ))}
        <PlanetButtons basePath={basePath} planet={planet} />
        {transitions((style, item) => (
          <animated.div style={style}>
            <PlanetInfo item={item} />
          </animated.div>
        ))}
      </InfoCard>
    </DestinationWrapper>
  );
}
