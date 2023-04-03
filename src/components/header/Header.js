import logo from "../../assets/shared/logo.svg";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import css from "./Header.module.css";

import MobileNav from "./mobileNav/MobileNav";
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";

export default function Header() {
  const isDesktop = useMediaQuery({ minWidth: 992 });

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.wrapper}>
      <img src={logo} alt="Logo" />
      {isDesktop ? null : (
        <HamburgerMenu isOpen={isOpen} handleClick={handleClick} />
      )}
      {!isDesktop && <MobileNav isOpen={isOpen} handleClick={handleClick}/>}
    </div>
  );
}
