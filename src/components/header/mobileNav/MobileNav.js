import css from "./MobileNav.module.css";
import { Link, useLocation } from "react-router-dom";
import close from "../../../assets/shared/icon-close.svg";

export default function MobileNav({ isOpen, handleClick }) {
  const location = useLocation();

  return (
    <div className={`${css.overlay} ${isOpen ? css.slideIn : ""}`}>
      <nav className={css.nav}>
        <button
          onClick={handleClick}
          aria-expanded={isOpen}
          aria-label="Toggle Menu"
          className={css.close}
        >
          <img src={close} alt="close" />
        </button>
        <ul className={css.navList}>
          <li className={css.navListItem}>
            <Link
              to="/"
              className={location.pathname === "/" ? css.active : ""}
            >
              Home
            </Link>
          </li>
          <li className={css.navListItem}>
            <Link
              to="/destination/moon"
              className={
                location.pathname.includes("/destination") ? css.active : ""
              }
            >
              Destination
            </Link>
          </li>
          <li className={css.navListItem}>
            <Link
              to="/crew"
              className={location.pathname === "/crew" ? css.active : ""}
            >
              Crew
            </Link>
          </li>
          <li className={css.navListItem}>
            <Link
              to="/technology"
              className={location.pathname === "/technology" ? css.active : ""}
            >
              Technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
