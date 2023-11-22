import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useCustomizer from "../hooks/useCustomizer";

const baseUrl = import.meta.env.VITE_WP_BASEURL;

const Home = () => {
  const [logoUrl, setLogoUrl] = useState("");

  const [landingBgStyle, setLandingBgStyle] = useState({ backgroundColor: "" });

  const { landingBgColor } = useCustomizer();

  //fetch the logo with useEffect:
  useEffect(() => {
    const fetchNavLogo = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/wp-json/custom/v1/nav-logo`
        );
        if (response.status === 200) {
          const data = response.data;
          console.log(response.data);
          setLogoUrl(data[0]);
        } else {
          console.error("Failed to fetch logo url", error);
        }
      } catch (error) {
        console.error("Error fetching lol URL", error);
      }
    };

    // const landingBg = document.querySelector(".landing-bg");
    // console.log({landingBgColor})

    // // Check if the element with the class "landing-bg" was found
    // if (landingBg) {
    //   // Apply the background color to the selected element
    //   landingBg.style.backgroundColor = `#${landingBgColor}`;
    // } else {
    //   console.error('No element with the class "landing-bg" found.');
    // }

    // const landingBg = document.querySelector(".landing-bg");

    // landingBg.style.backgroundColor = `#${landingBgColor}`

    // // // Check if any elements with the class "landing-bg" were found
    // // if (landingBg.length > 0) {
    // //   // Access the first element with the class "landing-bg" (you can modify this if needed)
    // //   const firstLandingBg = landingBg[0];

    // //   // Now, you can apply a background color to the selected element
    // //   firstLandingBg.style.backgroundColor = `#${landingBgColor}`;
    // // } else {
    // //   console.error('No element with the class "landing-bg" found.');
    // // }

    fetchNavLogo();

    // Update the landing background style when landingBgColor changes
    setLandingBgStyle({ backgroundColor: `${landingBgColor}` });
    console.log({landingBgColor})

    // }, []);
  }, [landingBgColor]);

  // RETURN OF THE HOME COMPONENT
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="This is the home page" />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        {/* { additional meta tags eg social media share tags for twitter, etc} */}
        <meta
          property="og:title"
          content="Facebook Open Graph Meta Tag example"
        />
      </Helmet>
      <div className="home-container">
        <div className="">
          <div id="logo">
            <img src={logoUrl} alt="Regan Hill-Male" />
          </div>
          <p className="blurb">blurb</p>
          <div className="cta">
            <Link to="/work" className="view-artworks">
              View Artworks
            </Link>
            <Link to="/contact" className="inquire">
              Inquire
            </Link>
          </div>
        </div>
        <div key={landingBgColor} className="landing-bg" style={landingBgStyle}>
          Landing Background
          <img src="" alt="" className="landing-bg-image" />
        </div>
      </div>
    </>
  );
};

export default Home;
