import { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import "./css/App.css";
import useCustomizer from "./hooks/useCustomizer";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Links from "./Links";

function App() {
  const { bgColor, landingBgColor, fontFamily, navbarColor } = useCustomizer();

  useEffect(() => {
    // Change the font based on the returned value
    if (fontFamily === "Trykker") {
      document.body.style.fontFamily = `'Trykker', sans-serif`;
    }
    if (fontFamily === "Montserrat") {
      document.body.style.fontFamily = `'Montserrat', sans-serif`;
    }
    if (fontFamily === "Dosis") {
      document.body.style.fontFamily = `'Dosis', sans-serif`;
    }
    if (fontFamily === "Fira sans Condensed") {
      document.body.style.fontFamily = `'Fira sans Condensed', sans-serif`;
    }

    // apply the bg color to body element
    document.body.style.backgroundColor = `#${bgColor}`;

    // const landingBg = document.getElementsByClassName(".landing-bg");

    // // landingBg.style.backgroundColor = `#${landingBgColor}`

    // // Check if any elements with the class "landing-bg" were found
    // if (landingBg.length > 0) {
    //   // Access the first element with the class "landing-bg" (you can modify this if needed)
    //   const firstLandingBg = landingBg[0];

    //   // Now, you can apply a background color to the selected element
    //   firstLandingBg.style.backgroundColor = `#${landingBgColor}`;
    // } else {
    //   console.error('No element with the class "landing-bg" found.');
    // }

  }, [bgColor, landingBgColor, fontFamily, navbarColor]);

  return (
    <>
      <HashRouter>
        <Header />
        <Links />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
