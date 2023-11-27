// import { useEffect } from "react";
// import { HashRouter } from "react-router-dom";
// import "./css/App.css";
// import useCustomizer from "./hooks/useCustomizer";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Links from "./Links";

// function App() {
//   const {
//     bgColor,
//     landingBgColor,
//     headingFont,
//     bodyFont,
//     navbarColor,
//     fontColor,
//   } = useCustomizer();

//   useEffect(() => {
//     // if (bodyFont === "Trykker") {
//     //   document.body.style.fontFamily = `'Trykker', sans-serif`;
//     // }
//     // if (bodyFont === "Montserrat") {
//     //   document.body.style.fontFamily = `'Montserrat', sans-serif`;
//     // }
//     // if (bodyFont === "Dosis") {
//     //   document.body.style.fontFamily = `'Dosis', sans-serif`;
//     // }
//     // if (bodyFont === "Fira sans Condensed") {
//     //   document.body.style.fontFamily = `'Fira sans Condensed', sans-serif`;
//     // }

//     const h2Elements = document.getElementsByTagName("h2");

//     for (let i = 0; i < h2Elements.length; i++) {
//     if (headingFont === "Trykker") {
//       h2Elements[i].style.fontFamily = `'Trykker', sans-serif`;
//     }
//     if (headingFont === "Montserrat") {
//       h2Elements[i].style.fontFamily = `'Montserrat', sans-serif`;
//     }
//     if (headingFont === "Dosis") {
//       h2Elements[i].style.fontFamily = `'Dosis', sans-serif`;
//     }
//     if (headingFont === "Fira sans Condensed") {
//       h2Elements[i].style.fontFamily = `'Fira sans Condensed', sans-serif`;
//     }
//     }

//     // const h2Elements = document.querySelectorAll("h2");

//     // if (headingFont === "Trykker") {
//     //   h2Elements.style.fontFamily = `'Trykker', sans-serif`;
//     // }
//     // if (headingFont === "Montserrat") {
//     //   h2Elements.style.fontFamily = `'Montserrat', sans-serif`;
//     // }
//     // if (headingFont === "Dosis") {
//     //   h2Elements.style.fontFamily = `'Dosis', sans-serif`;
//     // }
//     // if (headingFont === "Fira sans Condensed") {
//     //   h2Elements.style.fontFamily = `'Fira sans Condensed', sans-serif`;
//     // }

//     // if (bodyFont === "Trykker") {
//     //   document.body.style.fontFamily = `'Trykker', sans-serif`;
//     // }
//     // if (bodyFont === "Montserrat") {
//     //   document.body.style.fontFamily = `'Montserrat', sans-serif`;
//     // }
//     // if (bodyFont === "Dosis") {
//     //   document.body.style.fontFamily = `'Dosis', sans-serif`;
//     // }
//     // if (bodyFont === "Fira sans Condensed") {
//     //   document.body.style.fontFamily = `'Fira sans Condensed', sans-serif`;
//     // }

//     const bodyElements = document.querySelectorAll("h3", "p", "li");

//     for (let i = 0; i < bodyElements.length; i++) {
//       if (bodyFont === "Trykker") {
//         bodyElements[i].style.fontFamily = `'Trykker', sans-serif`;
//       }
//       if (bodyFont === "Montserrat") {
//         bodyElements[i].style.fontFamily = `'Montserrat', sans-serif`;
//       }
//       if (bodyFont === "Dosis") {
//         bodyElements[i].style.fontFamily = `'Dosis', sans-serif`;
//       }
//       if (bodyFont === "Fira sans Condensed") {
//         bodyElements[i].style.fontFamily = `'Fira sans Condensed', sans-serif`;
//       }
//     }

//     document.body.style.background = `${bgColor}`;
//     document.body.style.color = `${fontColor}`;
//   }, [bgColor, landingBgColor, headingFont, bodyFont, navbarColor, fontColor]);
//   // },[])

//   return (
//     <>
//       <HashRouter>
//         <Header />
//         <Links />
//         <Footer />
//       </HashRouter>
//     </>
//   );
// }

// export default App;

// import { useEffect } from "react";
// import { HashRouter } from "react-router-dom";
// import "./css/App.css";
// import useCustomizer from "./hooks/useCustomizer";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Links from "./Links";

// function App() {
//   const {
//     bgColor,
//     landingBgColor,
//     headingFont,
//     bodyFont,
//     navbarColor,
//     fontColor,
//   } = useCustomizer();

//   useEffect(() => {
//     const applyHeadingFont = (element, font) => {
//       element.style.fontFamily = `${font}, sans-serif !important`;
//     };

//     const h2Elements = document.getElementsByTagName("h2");

//     for (let i = 0; i < h2Elements.length; i++) {
//       if (headingFont === "Trykker") {
//         applyHeadingFont(h2Elements[i], headingFont);
//       } else if (headingFont === "Montserrat") {
//         applyHeadingFont(h2Elements[i], headingFont);
//       } else if (headingFont === "Dosis") {
//         applyHeadingFont(h2Elements[i], headingFont);
//       } else if (headingFont === "Fira sans Condensed") {
//         applyHeadingFont(h2Elements[i], headingFont);
//       }
//       // Add additional else if statements for other heading fonts if needed
//     }

//     const applyBodyFont = (font) => {
//       document.body.style.fontFamily = `${font}, sans-serif`;
//     };

//     if (bodyFont === "Trykker") {
//       applyBodyFont(bodyFont);
//     } else if (bodyFont === "Montserrat") {
//       applyBodyFont(bodyFont);
//     } else if (bodyFont === "Dosis") {
//       applyBodyFont(bodyFont);
//     } else if (bodyFont === "Fira sans Condensed") {
//       applyBodyFont(bodyFont);
//     }
//     // Add additional else if statements for other body fonts if needed

//     document.body.style.background = `${bgColor}`;
//     document.body.style.color = `${fontColor}`;
//   }, [bgColor, landingBgColor, headingFont, bodyFont, navbarColor, fontColor]);

//   return (
//     <>
//       <HashRouter>
//         <Header />
//         <Links />
//         <Footer />
//       </HashRouter>
//     </>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import { HashRouter } from "react-router-dom";
// import "./css/App.css";
// import useCustomizer from "./hooks/useCustomizer";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Links from "./Links";

// function App() {
//   const {
//     bgColor,
//     landingBgColor,
//     headingFont,
//     bodyFont,
//     navbarColor,
//     fontColor,
//   } = useCustomizer();

//   const [headingStyle, setHeadingStyle] = useState({});
//   const [bodyStyle, setBodyStyle] = useState({});
//   const [bodyBackground, setBodyBackground] = useState("");
//   const [bodyColor, setBodyColor] = useState("");

//   useEffect(() => {
//     const applyHeadingFont = (font) => {
//       setHeadingStyle({
//         fontFamily: `${font}, serif !important`,
//       });
//     };

//     const applyBodyFont = (font) => {
//       setBodyStyle({
//         fontFamily: `${font}, sans-serif`,
//       });
//     };

//     applyBodyFont(bodyFont);

//     setBodyBackground(bgColor);
//     setBodyColor(fontColor);

//     const h2Elements = document.getElementsByTagName("h2");
//     for (let i = 0; i < h2Elements.length; i++) {
//       applyHeadingFont(headingFont);
//     }
//   }, [bgColor, headingFont, bodyFont, fontColor]);

//   return (
//     <>
//       <HashRouter>
//         <Header />
//         <Links />
//         <Footer />
//       </HashRouter>
//       <style>
//         {`
//           body {
//             background: ${bodyBackground};
//             color: ${bodyColor};
//             ${Object.entries(bodyStyle).map(
//               ([key, value]) => `${key}: ${value};`
//             ).join(' ')}
//           }
//           h2 {
//             ${Object.entries(headingStyle).map(
//               ([key, value]) => `${key}: ${value};`
//             ).join(' ')}
//           }
//         `}
//       </style>
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
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
    fontColor,
  } = useCustomizer();

  useEffect(() => {
    const applyStyles = async () => {
      // // Apply body font to h2 elements
      // const bodyElements = document.querySelectorAll("h3, p, li, a, input, textarea");
      // for (let i = 0; i < bodyElements.length; i++) {
      //   bodyElements[i].style.fontFamily = `${bodyFont}, serif`;
      // }

      // // Apply heading font to h2 elements
      // const headingElements = document.querySelectorAll("h2, button");
      // for (let i = 0; i < headingElements.length; i++) {
      //   headingElements[i].style.fontFamily = `${headingFont}, sans-serif`;
      // }

      // Apply background and font color
      // document.body.style.background = `#${bgColor}`;
      console.log(bgColor);
      // document.body.style.color = fontColor;
      console.log(fontColor);
      console.log(headingFont, bodyFont);

      const blueTextElements = document.querySelectorAll("a, button, .inquire");
      for (let i = 0; i < blueTextElements.length; i++) {
        blueTextElements[i].style.color = fontColor;
      }

      const styles = document.getElementById("dynamicStyles");
      styles.innerHTML = `h3, p, li, a, input, textarea { font-family: ${bodyFont}, sans-serif; } 
      h2, button { font-family: ${headingFont}, serif; }
      body { background: #${bgColor}; color: ${fontColor}}
      a, button, .inquire { color: ${fontColor}}`
    };

    applyStyles();

    //Function to be executed every 1 seconds
    // const intervalId = setInterval(applyStyles, 1000);

    // Clean up the interval on component unmount
    // return () => clearInterval(intervalId);

  }, [bgColor, headingFont, bodyFont, fontColor]);
// }, [bgColor, fontColor]);

  console.log(headingFont, bodyFont);
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