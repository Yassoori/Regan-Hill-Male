import { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import "./css/App.css";
import useCustomizer from "./hooks/useCustomizer";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Links from "./Links";

function App() {
  const {
    bgColor,
    landingBgColor,
    headingFont,
    bodyFont,
    navbarColor,
    fontColor,
  } = useCustomizer();

  useEffect(() => {
    const h2Elements = document.getElementsByTagName("h2");

    for (let i = 0; i < h2Elements.length; i++) {
      if (headingFont === "Trykker") {
        h2Elements[i].style.fontFamily = `'Trykker', sans-serif !important`;
      }
      if (headingFont === "Montserrat") {
        h2Elements[i].style.fontFamily = `'Montserrat', sans-serif !important`;
      }
      if (headingFont === "Dosis") {
        h2Elements[i].style.fontFamily = `'Dosis', sans-serif !important`;
      }
      if (headingFont === "Fira sans Condensed") {
        h2Elements[i].style.fontFamily = `'Fira sans Condensed', sans-serif !important`;
      }
    }
    
    if (bodyFont === "Trykker") {
      document.body.style.fontFamily = `'Trykker', sans-serif`;
    }
    if (bodyFont === "Montserrat") {
      document.body.style.fontFamily = `'Montserrat', sans-serif`;
    }
    if (bodyFont === "Dosis") {
      document.body.style.fontFamily = `'Dosis', sans-serif`;
    }
    if (bodyFont === "Fira sans Condensed") {
      document.body.style.fontFamily = `'Fira sans Condensed', sans-serif`;
    }

    // const pElements = document.getElementsByTagName("h3, p, li");

    // for (let i = 0; i < pElements.length; i++) {
    //   if (bodyFont === "Trykker") {
    //     pElements[i].style.fontFamily = `'Trykker', sans-serif`;
    //   }
    //   if (bodyFont === "Montserrat") {
    //     pElements[i].style.fontFamily = `'Montserrat', sans-serif`;
    //   }
    //   if (bodyFont === "Dosis") {
    //     pElements[i].style.fontFamily = `'Dosis', sans-serif`;
    //   }
    //   if (bodyFont === "Fira sans Condensed") {
    //     pElements[i].style.fontFamily = `'Fira sans Condensed', sans-serif`;
    //   }
    // }

    document.body.style.background = `${bgColor}`;
    document.body.style.color = `${fontColor}`;
  }, [bgColor, landingBgColor, headingFont, bodyFont, navbarColor, fontColor]);

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
