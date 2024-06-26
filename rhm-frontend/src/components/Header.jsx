import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";
import axios from "axios";

const baseUrl = import.meta.env.VITE_WP_BASEURL;

const Header = () => {
  const [menuIsOpen, openMenu] = useState(false);
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    const fetchNavLogo = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/wp-json/custom/v1/nav-logo`
        );
        if (response.status === 200) {
          const data = response.data;
          setLogoUrl(data[0]);
        } else {
          console.error("Failed to fetch logo url", error);
        }
      } catch (error) {
        console.error("Error fetching lol URL", error);
      }
    };

    fetchNavLogo();
  }, []);

  const toggleMobileMenu = () => {
    openMenu(!menuIsOpen);
    document.body.classList.toggle("no-scroll");

    // $(document).ready(function () {
    //   $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    //     $(this).toggleClass("open");
    //   });
    // });
  };
  return (
    <>
      <div id="topnav">
        <div id="logo">
          <Link to="/">
            <img src={logoUrl} alt="Regan Hill-Male" />
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="left-nav">
          <ul id="menu">
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <img src="/iconbag.png" alt="Cart" />

          {/* Hamburger on Mobile */}
          <div id="menu-container">
            {/* <div id="nav-icon3 menu-button"
              className="show-mobile-menu-button"
              onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div> */}
            <button
              id="menu-button"
              className="show-mobile-menu-button"
              onClick={toggleMobileMenu}
            >
              <List id="hamburger-icon" />
            </button>
          </div>
        </div>
      </div>
      {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
    </>
  );
};

export default Header;
