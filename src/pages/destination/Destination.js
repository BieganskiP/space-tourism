import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import { useParams, Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import css from "./Destination.module.css";
import data from "../../data/data.json";

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
    <div className={css.wrapper}>
      <Header />
      <div className={css.container}>
        <p className={css.text}>
          <span className={css.textColor}>01</span>Pick your destination
        </p>

        <div className={css.infoCard}>
          {transitions((style, item) => (
            <animated.div style={style}>
              <img
                src={item.images.png}
                alt={item.name}
                className={css.image}
              />
            </animated.div>
          ))}

          <div className={css.planetButtons}>
            <Link
              to={`${basePath}/moon`}
              className={
                planet === "moon"
                  ? `${css.activeButton} ${css.active}`
                  : css.button
              }
            >
              Moon
            </Link>
            <Link
              to={`${basePath}/mars`}
              className={
                planet === "mars"
                  ? `${css.activeButton} ${css.active}`
                  : css.button
              }
            >
              Mars
            </Link>
            <Link
              to={`${basePath}/europa`}
              className={
                planet === "europa"
                  ? `${css.activeButton} ${css.active}`
                  : css.button
              }
            >
              Europa
            </Link>
            <Link
              to={`${basePath}/titan`}
              className={
                planet === "titan"
                  ? `${css.activeButton} ${css.active}`
                  : css.button
              }
            >
              Titan
            </Link>
          </div>

          {transitions((style, item) => (
            <animated.div style={style}>
              <h1 className={css.header}>{item.name}</h1>
              <p className={css.description}>{item.description}</p>
              <div className={css.divider}></div>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <span className={css.listDesc}>AVG. DISTANCE</span>{" "}
                  <span className={css.listValue}>{item.distance}</span>
                </li>
                <li className={css.listItem}>
                  <span className={css.listDesc}>Est. travel time</span>{" "}
                  <span className={css.listValue}>{item.travel}</span>
                </li>
              </ul>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
}
