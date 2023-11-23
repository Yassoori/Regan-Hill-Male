import { useState, useEffect } from "react";
// import mobile menu
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
// import List for bootstrap icons
import { List } from "react-bootstrap-icons";
import axios from "axios";

const baseUrl = import.meta.env.VITE_WP_BASEURL;

const Header = () => {
  //set a state to check if the mobile menu is open or not
  const [menuIsOpen, openMenu] = useState(false);
  const [logoUrl, setLogoUrl] = useState('')

  //fetch the logo with useEffect:
  useEffect(() => {
      const fetchNavLogo = async () => {
          try {
              const response = await axios.get(`${baseUrl}/wp-json/custom/v1/nav-logo`)
              if (response.status === 200) {
                  const data = response.data
                  // console.log(response.data);
                  setLogoUrl(data[0])
              } else {
                console.error("Failed to fetch logo url" , error)
              }
          } catch (error) {
              console.error("Error fetching lol URL" , error)
          }
      }

      fetchNavLogo()

  }, [])

  const toggleMobileMenu = () => {
    openMenu(!menuIsOpen);
    document.body.classList.toggle("no-scroll");
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
        <img src='/iconbag.png' alt="Cart" />

        {/* Hamburger on Mobile */}
        <div id="menu-container">
          <button
            id="menu-button"
            className="show-mobile-menu-button"
            onClick={toggleMobileMenu}
          >
            <List id="hamburger-icon" />
          </button>
        </div>
      </div>

      {/* If menuIsOpen, show the mobile menu */}
      {/* give the mobile menu our close method as a prop */}
      {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
    </>
  );
};

export default Header;
