import React, { useState} from "react";
import "./Header.sass";
import { NAV_LINKS } from "../../scripts";


const Header = (props) => {
  const headerRef = props.headerRef;
  const activeLink = props.activeLink;


  const [isMenuActive, setIsMenyActive] = useState(false);

  const MenuClickHandler = () => {
    setIsMenyActive(!isMenuActive);
  };

  return (
    <div
      ref={headerRef}
      className="header sticky"
    >
      <a href="#home" className="header__logo">
        Vladislav.
        <span className="animate-span" style={{ "--i": 2 }} />
      </a>
      <div
        onClick={MenuClickHandler}
        className={isMenuActive ? "bx bx-menu bx-x" : "bx bx-menu"}
        id="menu-icon"
      ></div>

      <nav
        className={
          isMenuActive ? "header__navbar active-navbar" : "header__navbar"
        }
      >
        {NAV_LINKS.map(({ id, text }) => (
          <a
            onClick={MenuClickHandler}
            key={id}
            href={`#${id}`}
            className={activeLink === id ? "active" : ""}
          >
            {text}
          </a>
        ))}
        <span className="animate-span" style={{ "--i": 3 }} />
      </nav>
    </div>
  );
};

export default Header;
