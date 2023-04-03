import React from "react";
import css from "./InfoCard.module.css";

export default function InfoCard({ children }) {
  return <div className={css.infoCard}>{children}</div>;
}
