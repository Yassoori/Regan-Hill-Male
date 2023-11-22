import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Loading from "../components/Loading";

// Products Endpoint from our env
const productsUrl = import.meta.env.VITE_WC_PRODUCTS_URL;

const Shopfront = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  //   const workType = [mural, painting, print];
  //   const result = workType.filter(checkWorkType);

  useEffect(() => {
    axios
      .get(`${productsUrl}`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const Products = ({ products }) => {
    console.log({ products });
    const mappedProducts = products.map((product, index) => {
      // function getFeaturedImage(product) {
      //     if (product && product.images && product.images[0] ) {
      //         return product.images[0].src
      //     } else {
      //         return 'https://placehold.co/600x400'
      //     }
      // } // end of getFeatured Image

      return (
        <div className="post-card item-container" key={index}>
          {/* <img className='product-image' src={getFeaturedImage(product)} alt="Product Image"/> */}
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
      ); // end of map return
    }); // end of map

    // return for products

    return <>{mappedProducts}</>;
  }; // end of Products

  // shopfront return
  return (
    <div id="shop-page" className="container">
      <h2>Shop</h2>
      <div className="cardCont">
        {loading ? <Loading /> : <Products products={products} />}
      </div>
    </div>
  );
};

export default Shopfront;
