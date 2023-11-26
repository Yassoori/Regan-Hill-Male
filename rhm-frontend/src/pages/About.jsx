import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Loading from "../components/Loading";

const aboutUrl = import.meta.env.VITE_WP_ABOUT_URL;

const About = () => {
  const [aboutEntry, setAboutEntry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${aboutUrl}`)
      .then((res) => {
        setAboutEntry(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const AboutEntry = ({ abouts }) => {
    if (!abouts) {
      return null; // Handle the case when abouts is undefined or null
    }

    const mappedAbouts = abouts.map((about, index) => (
      // <div className="about" key={index}>
      <div
        className="about-container"
        key={index}
        dangerouslySetInnerHTML={{ __html: about.content.rendered }}
      />
      // </div>
    ));

    return <>{mappedAbouts}</>;
  };

  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="This is the about page" />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        {/* Additional meta tags, e.g., social media share tags for Twitter, etc. */}
        <meta
          property="og:title"
          content="Facebook Open Graph Meta Tag example"
        />
      </Helmet>
      <div className="container double-container">
        {loading ? <Loading /> : <AboutEntry abouts={aboutEntry} />}
      </div>
    </>
  );
};

export default About;
