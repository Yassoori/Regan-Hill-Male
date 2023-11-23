import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const productsUrl = import.meta.env.VITE_WC_PRODUCTS_URL;

const Work = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    axios
      .get(`${productsUrl}`)
      .then((res) => {
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
    setFilter((prevFilter) =>
      prevFilter === selectedFilter ? null : selectedFilter
    );
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
          <Link className="product-link" to={`/product/${product.id}`}>
            <h2 className="title">{product.name}</h2>
            <h2 className="price">
              ${(parseFloat(product.prices.price) / 100).toFixed(2)}{" "}
              {product.prices.currency_code}
            </h2>
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
        {loading ? (
          <Loading />
        ) : (
          <Products products={filteredProducts || products} />
        )}
      </div>
    </div>
  );
};

export default Work;
