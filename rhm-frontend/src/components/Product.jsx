import { useState, useEffect } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Loading from "./Loading";

// Products Url
const productsUrl = import.meta.env.VITE_WC_PRODUCTS_URL;

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const endpoint = `${productsUrl}/${id}`;

  useEffect(() => {
    axios
      .get(`${endpoint}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        const loader = setTimeout(() => setLoading(false), 1000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [endpoint]);

//   function getFeaturedImage(product) {
//     if (product && product.images && product.images[0]) {
//       return product.images[0].src;
//     } else {
//       return "https://placehold.co/600x400";
//     }
//   } // end of getFeatured Image

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div id="shop-page" className="container">
      <div className="left-container">
        <img src={product.images[0].src} alt={product.name} />
      </div>
      <div className="right-container">
      <h2 className="title">{product.name}</h2>
      <h2 className="price">
        ${(parseFloat(product.prices.price) / 100).toFixed(2)}{" "}
        {product.prices.currency_code}
      </h2>
      {/* <h3 className="subtitle">{product.description}</h3> */}
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </div>
      {/* <div className='product-container item-container'>
            <button onClick={() => navigate(-1)}><ArrowLeft/>Go Back</button>
            <img className='product-image' src={getFeaturedImage(product)} alt="Product Image"/>
            <h4 className='name'>{product.name}</h4>
            <h3 className='name'>${(parseFloat(product.prices.price) / 100).toFixed(2)} {product.prices.currency_code}</h3>
        </div>
        <div
            id="product-description"
            dangerouslySetInnerHTML={{__html: product.description}}
        /> */}
    </div>
  );
};

export default Product;
