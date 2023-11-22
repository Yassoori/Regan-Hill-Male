import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

const baseUrl = import.meta.env.VITE_WP_BASEURL;

const About = () => {
//   const [aboutPhoto, setAboutPhoto] = useState("");

//   //fetch the about photo with useEffect:
//   useEffect(() => {
//     const fetchAboutPhoto = async () => {
//       try {
//         const response = await axios.get(
//           `${baseUrl}/wp-json/custom/v1/about-photo`
//         );
//         if (response.status === 200) {
//           const data = response.data;
//           console.log(response.data);
//           setAboutPhoto(data[0]);
//         } else {
//           console.error("Failed to fetch about photo url", error);
//         }
//       } catch (error) {
//         console.error("Error fetching lol URL", error);
//       }
//     };

//     fetchNavLogo();
//   }, []);

  // RETURN OF THE HOME COMPONENT
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="This is the about page" />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        {/* { additional meta tags eg social media share tags for twitter, etc} */}
        <meta
          property="og:title"
          content="Facebook Open Graph Meta Tag example"
        />
      </Helmet>
      <div className="container double-container">
        {/* <h2 class='about-greeting'>Kia Ora, I'm Regan</h2>
        <div className="">
          <img src={aboutPhoto} alt="Regan Hill-Male" className='about-image'/>
          <p className="about-bio">
            I'm a North Shore based artist, who's is practice is centred by the
            rhythms and patterns of nature, and is deeply inspired by the beauty
            and complexity of the natural world.
            <br />
            I work primarily with acrylics, embracing the unpredictability of
            the creative process as I develop each piece intuitively. This
            journey of discovery keeps my art fresh and exciting.
            <br />
            Since 2022, I've been focused on mural commissions, using my art to
            enrich urban spaces with vibrancy and character. I believe that art
            in schools is essential for inspiring our young kiwis to enjoy their
            learning spaces, to aim high and reach their potential.
          </p>
        </div> */}
      </div>
    </>
  );
};

export default About;
