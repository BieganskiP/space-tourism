import Header from "../../components/header/Header";
import css from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={css.wrapper}>
      <Header />
      <div className={css.textContent}>
        <p className={css.text}>SO, YOU WANT TO TRAVEL TO</p>
        <h1 className={css.header}>SPACE</h1>
        <p className={css.subText}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className={css.buttonContainer}>
        <button
          className={css.button}
          onClick={() => navigate("/destination/moon")}
        >
          EXPLORE
        </button>
      </div>
    </div>
  );
}
