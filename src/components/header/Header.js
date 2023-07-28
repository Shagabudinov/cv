import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import "./Header.sass";
import { NAV_LINKS } from "../../scripts";

const Header = ({ headerRef, activeLink }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const MenuClickHandler = useCallback(() => {
    setIsMenuActive((prevState) => !prevState);
  }, []);

  const memoizedNavLinks = useMemo(() => {
    return NAV_LINKS.map(({ id, text }) => (
      <a
        key={id}
        href={`#${id}`}
        className={activeLink === id ? "active" : ""}
        onClick={MenuClickHandler}
      >
        {text}
      </a>
    ));
  }, [activeLink, MenuClickHandler]);

  return (
    <div ref={headerRef} className="header sticky">
      <a href="#home" className="header__logo">
        Vladislav.
        <span className="animate-span" style={{ "--i": 2 }} />
      </a>
      <div
        onClick={MenuClickHandler}
        className={isMenuActive ? "bx bx-menu bx-x" : "bx bx-menu"}
        id="menu-icon"
        aria-label={isMenuActive ? "Close menu" : "Open menu"}
      ></div>

      <nav
        className={
          isMenuActive ? "header__navbar active-navbar" : "header__navbar"
        }
      >
        {memoizedNavLinks}
        <span className="animate-span" style={{ "--i": 3 }} />
      </nav>
    </div>
  );
};

export default Header;
