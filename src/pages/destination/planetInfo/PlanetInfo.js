import React from "react";
import css from "./PlanetInfo.module.css";

export default function PlanetInfo({ item }) {
  return (
    <>
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
    </>
  );
}
