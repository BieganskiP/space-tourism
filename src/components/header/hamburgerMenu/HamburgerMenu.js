import css from "./HamburgerMenu.module.css";
import hamburger from "../../../assets/shared/icon-hamburger.svg";

export default function HamburgerMenu({ isOpen, handleClick }) {
  return (
    <button
      className={css.hamburgerMenu}
      onClick={handleClick}
      aria-expanded={isOpen}
      aria-label="Toggle Menu"
    >
      <img src={hamburger} alt="Hamburger" />
    </button>
  );
}
