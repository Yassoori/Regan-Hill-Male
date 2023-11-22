import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const WorkType = ({ work }) => {
  const [taxonomies, setTaxonomies] = useState([]);

  useEffect(() => {
    if (!work) {
      return;
    }

    const taxonomyEndpoint = work._links["wp:term"][0].href;

    axios
      .get(`${taxonomyEndpoint}`)
      .then((res) => {
        console.log("work taxonomy call");
        setTaxonomies(res.data);
      })
      .catch((err) => console.log(err));
  }, [work]);

  const renderedTaxonomies = taxonomies.map((taxonomy, index) => {
    return (
      <Link to={`/worktype/${taxonomy.id}`} key={index}>
        <span className="taxonomy-term-pill">{taxonomy.name}</span>
      </Link>
    );
  });

  return <div>{renderedTaxonomies}</div>;
};

const SingleWork = () => {
  const [work, setWork] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const navigate = useNavigate();

  const endpoint = `${baseUrl}/work/${id}?_embed`;

  useEffect(() => {
    axios
      .get(`${endpoint}`)
      .then((res) => {
        console.log(res.data);
        setWork(res.data);
        const loader = setTimeout(() => setLoading(false), 2000);
      })
      .catch((err) => console.log(err));
  }, []);

//   function getFeaturedImage(work) {
//     if (
//       work &&
//       work._embedded &&
//       work._embedded["wp:featuredmedia"] &&
//       work._embedded["wp:featuredmedia"][0].source_url
//     ) {
//       return work._embedded["wp:featuredmedia"][0].source_url;
//     } else {
//       return "https://placehold.co/600x400";
//     }
//   }

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div className="container double-container">
        <h2 className="title">{work.title.rendered}</h2>
        <div dangerouslySetInnerHTML={{ __html: work.content.rendered }} />
        <WorkType work={work}/>
    </div>
  );
};

export default SingleWork;
