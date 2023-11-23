import { useState, useEffect } from "react";
import axios from "axios";

const useCustomizer = () => {
  // variable for each setting from the customizer
  const [bgColor, setBgColor] = useState("");
  const [headingFont, setHeadingFont] = useState("");
  const [bodyFont, setBodyFont] = useState("");
  const [landingBgColor, setLandingBgColor] = useState("");
  const [navColor, setNavColor] = useState("");
  const [fontColor, setFontColor] = useState("");

  const baseUrl = import.meta.env.VITE_WP_BASEURL;

  // http:localhost/yoobee-wp/wp-json/custom-theme/v1/customizer-settings

  useEffect(() => {
    axios
      .get(`${baseUrl}/wp-json/custom-theme/v1/customizer-settings`)
      .then((response) => {
        const { backgroundColor, landingBackgroundColor, headingFont, bodyFont, navbarColor, fontColor } =
          response.data; // add to the destructure
        setBgColor(backgroundColor);
        setLandingBgColor(landingBackgroundColor);
        setHeadingFont(headingFont);
        setBodyFont(bodyFont);
        // change the state to the destructure
        setNavColor(navbarColor);
        setFontColor(fontColor);
      })
      .catch((error) => {
        console.error("Error fetching customizer settings:", error);
      });
  }, [baseUrl]);

  // console.log("Heading Font:", headingFont);
  // console.log("Body Font:", bodyFont);
  // console.log("Font Color:", fontColor);

  return { bgColor, landingBgColor, headingFont, bodyFont, navColor, fontColor }; // add to the return object
};

export default useCustomizer;
