import React from "react";
import Header from "../../../components/header/Header";
import css from "./DestinationContainer.module.css";

export default function DestinationContainer({ children }) {
  return (
    <div className={css.wrapper}>
      <Header />
      <div className={css.container}>{children}</div>
    </div>
  );
}
