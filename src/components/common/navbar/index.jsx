import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgSticky, setBgSticky] = useState(false);
  const history = useHistory();
  const { pathname } = useLocation();

  const handleMenu = () => {
    setIsOpen(prev => !prev);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 80) {
      setBgSticky(true);
    } else {
      setBgSticky(false);
    }
  });

  const handleCloseMenu = () => setIsOpen(false);

  const handleLogo = () => history.push("/");

  return (
    <>
      <div
        className={
          bgSticky
            ? "navbar bg-sticky"
            : `${pathname != "/" ? "navbar bg-white" : "navbar"}`
        }>
        <div className="navbar__container">
          <div className="navbar__logo" onClick={handleLogo}>
            Recipros
          </div>

          <div className={`overlay ${isOpen && "open"}`}></div>

          <div className="navbar__icon" onClick={handleMenu}>
            {isOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </div>

          <ul className={`navbar__main ${isOpen && "open"}`}>
            <li onClick={handleCloseMenu}>
              <NavLink activeClassName="true" exact to="/">
                Home
              </NavLink>
            </li>
            <li onClick={handleCloseMenu}>
              <NavLink activeClassName="true" to="/bookmarks">
                Bookmarks
              </NavLink>
            </li>
            <li onClick={handleCloseMenu}>
              <NavLink activeClassName="true" to="/recipes">
                Recipes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
