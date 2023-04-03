import React from "react";
import { Link } from "react-router-dom";
import css from "./PlanetButtons.module.css";

export default function PlanetButtons({ basePath, planet }) {
  const destinations = ["moon", "mars", "europa", "titan"];

  return (
    <div className={css.planetButtons}>
      {destinations.map((destination) => (
        <Link
          key={destination}
          to={`${basePath}/${destination}`}
          className={
            planet === destination
              ? `${css.activeButton} ${css.active}`
              : css.button
          }
        >
          {destination.charAt(0).toUpperCase() + destination.slice(1)}
        </Link>
      ))}
    </div>
  );
}
