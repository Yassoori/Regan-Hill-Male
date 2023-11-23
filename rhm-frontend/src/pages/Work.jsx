import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

// import Shopfront from './Shopfront'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;
// console.log(baseUrl);

const productsUrl = import.meta.env.VITE_WC_PRODUCTS_URL;

const Work = () => {
  const [loading, setLoading] = useState(true);
//   const [works, setWorks] = useState(null);
  const [products, setProducts] = useState(null);
//   const endpoint = `${baseUrl}/work?_embed`;
const [filteredProducts, setFilteredProducts] = useState(null);
const [filter, setFilter] = useState(null);

  useEffect(() => {
    axios
    //   .get(`${endpoint}`)
    .get(`${productsUrl}`)
      .then((res) => {
        console.log(res.data);
        // setWorks(res.data);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!filter) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.categories.some((category) => category.name === filter)
      );
      setFilteredProducts(filtered);
    }
  }, [filter, products]);

  const handleFilterClick = (selectedFilter) => {
    setFilter((prevFilter) => (prevFilter === selectedFilter ? null : selectedFilter));
  };

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  const Products = ({ products }) => {
    const mappedProducts = products.map((product, index) => {
      // const type = work.acf.work_type
      return (
        <div key={product.slug + "_" + index} className="product-card">
          {/* <Link className="item-link" to={`#/work/${work.id}`}> */}
            {/* <h2 className="title">{work.title.rendered}</h2> */}
            {/* <div dangerouslySetInnerHTML={{ __html: work.content.rendered }} /> */}
            {/* <h2 className="price">{work.price.rendered}</h2> */}
            {/* <h3 className="medium year">{work.medium.rendered} - {work.year.rendered}</h3> */}
            {/* <img src={getFeaturedImage(work)} alt="" /> */}
          {/* </Link> */}
          <Link className="product-link" to={`/product/${product.id}`}>
            <h2 className="title">{product.name}</h2>
            <h2 className="price">
              ${(parseFloat(product.prices.price) / 100).toFixed(2)}{" "}
              {product.prices.currency_code}
            </h2>
            {/* <h3 className="subtitle">{product.description}</h3> */}
            <div
              dangerouslySetInnerHTML={{ __html: product.short_description }}
            />
            <img src={product.images[0].src} alt={product.name} />
          </Link>
        </div>
      );
    });

    return <>{mappedProducts}</>;
  };

  return (
    <div className="container full-container">
      <ul className="filter">
        <li onClick={() => handleFilterClick("Mural")}>Murals</li>
        <li onClick={() => handleFilterClick("Print")}>Prints</li>
        <li onClick={() => handleFilterClick("Painting")}>Paintings</li>
      </ul>
      <div className="container">
        {/* {loading ? <Loading /> : <Works works={works} />} */}
        {/* {loading ? <Loading /> : <Products products={products} />} */}
        {loading ? <Loading /> : <Products products={filteredProducts || products} />}
        {/* <Shopfront/> */}
      </div>
    </div>
  );
};

export default Work;
