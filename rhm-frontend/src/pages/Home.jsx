import { useState, useEffect } from "react";
// import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useCustomizer from "../hooks/useCustomizer";
// import Loading from "../components/Loading";

const baseUrl = import.meta.env.VITE_WP_BASEURL;
// const LandingImageUrl = import.meta.env.VITE_WP_LANDING_IMAGE_URL;
// const landingImageUrl = `${baseUrl}/wp-content/uploads/2023/11/Tendrils-2019-Acrylic-on-Board-1-1.webp`
const Home = () => {

  // const [landingImage, setLandingImage] = useState("");

  const [landingBgStyle, setLandingBgStyle] = useState({ backgroundColor: "" });
  const { landingBgColor } = useCustomizer();

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLandingBgStyle({ backgroundColor: `${landingBgColor}`  });
  }, [landingBgColor]);

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
      <div className="home-container container">
        <div className="home-text">

          <h2 className="greeting">Kia Ora, I'm Regan</h2>
          <p className="blurb">
            I paint murals commisions and sell my prints and paintings here.
          </p>
          <div className="cta">
            <Link to="/work" className="view-artworks">
              <p className="cta-text">View Artworks</p>
            </Link>
            <Link to="/contact" className="inquire">
              <p className="cta-text">Inquire</p>
            </Link>
          </div>
        </div>
        <div key={landingBgColor} className="landing-bg" style={landingBgStyle}></div>
          <img src="public/Tendrils - 2019 - Acrylic on Board .webp" alt="" className="landing-bg-image" />
          {/* {loading ? <Loading /> : <LandingImage landings={landingImage} />} */}
      </div>
    </>
  );
};

export default Home;
