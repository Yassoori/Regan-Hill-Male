import { useState, useEffect } from "react";
import axios from "axios";

const useCustomizer = () => {
  // variable for each setting from the customizer
  const [bgColor, setBgColor] = useState("");
  const [fontFamily, setFontFamily] = useState("");
  const [landingBgColor, setLandingBgColor] = useState("");
  // Add extra state for extra settings
  const [navColor, setNavColor] = useState("");

  const baseUrl = import.meta.env.VITE_WP_BASEURL;

  // http:localhost/yoobee-wp/wp-json/custom-theme/v1/customizer-settings

  useEffect(() => {
    axios
      .get(`${baseUrl}/wp-json/custom-theme/v1/customizer-settings`)
      .then((response) => {
        const { backgroundColor, landingBackgroundColor, fontFamily, navbarColor } =
          response.data; // add to the destructure
          console.log(landingBackgroundColor);
        setBgColor(backgroundColor);
        setLandingBgColor(landingBackgroundColor);
        setFontFamily(fontFamily);
        // change the state to the destructure
        setNavColor(navbarColor);
      })
      .catch((error) => {
        console.error("Error fetching customizer settings:", error);
      });
  }, [baseUrl]);

  return { bgColor, landingBgColor, fontFamily, navColor }; // add to the return object
};

export default useCustomizer;
