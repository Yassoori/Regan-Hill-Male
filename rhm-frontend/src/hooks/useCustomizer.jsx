import { useState, useEffect } from "react";
import axios from "axios";

const useCustomizer = () => {
  const [bgColor, setBgColor] = useState("");
  const [headingFont, setHeadingFont] = useState("");
  const [bodyFont, setBodyFont] = useState("");
  const [landingBgColor, setLandingBgColor] = useState("");
  const [navColor, setNavColor] = useState("");
  const [fontColor, setFontColor] = useState("");

  const baseUrl = import.meta.env.VITE_WP_BASEURL;


  useEffect(() => {
    axios
      .get(`${baseUrl}/wp-json/custom-theme/v1/customizer-settings`)
      .then((response) => {
        const { backgroundColor, landingBackgroundColor, headingFont, bodyFont, navbarColor, fontColor } =
          response.data;
        setBgColor(backgroundColor);
        setLandingBgColor(landingBackgroundColor);
        setHeadingFont(headingFont);
        setBodyFont(bodyFont);
        setNavColor(navbarColor);
        setFontColor(fontColor);
      })
      .catch((error) => {
        console.error("Error fetching customizer settings:", error);
      });
  }, [baseUrl]);

  return { bgColor, landingBgColor, headingFont, bodyFont, navColor, fontColor };
};

export default useCustomizer;
