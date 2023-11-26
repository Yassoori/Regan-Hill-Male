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
          // console.log(response.data);
          setLogoUrl(data[0]);
        } else {
          console.error("Failed to fetch logo url", error);
        }
      } catch (error) {
        console.error("Error fetching lol URL", error);
      }
    };

    fetchNavLogo();
    setLandingBgStyle({ backgroundColor: `${landingBgColor}` });
    // console.log({ landingBgColor });
  }, [landingBgColor]);

  // RETURN OF THE HOME COMPONENT
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="This is the home page" />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta
          property="og:title"
          content="Facebook Open Graph Meta Tag example"
        />
      </Helmet>
      <div className="home-container">
        <div className="home-text">
          {/* <div id="logo">
            <img src={logoUrl} alt="Regan Hill-Male" />
          </div> */}
          <h2 className="greeting">Kia Ora, I'm Regan Hill-Male</h2>
          <p className="blurb">I paint murals commisions and sell my prints and paintings here.</p>
          <div className="cta">
            <Link to="/work" className="view-artworks">
              <p className="cta-text">View Artworks</p>
            </Link>
            <Link to="/contact" className="inquire">
              <p className="cta-text">Inquire</p>
            </Link>
          </div>
        </div>
        <div key={landingBgColor} className="landing-bg" style={landingBgStyle}>
          {/* <img src="" alt="" className="landing-bg-image" /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
