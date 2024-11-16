import { useEffect, useState } from "react";
import "./homepage.scss";
import Loader from "../../Components/Loader";
import ProductCard from "../../Components/ProductCard";

function Homepage() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const { products = [] } = data || {};
        setProducts(products);
        setIsLoading(false);
      })
      .catch(() => {
        alert("Failed to fetch products");
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="homepage">
      <h1 className="title">All Products</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard product={product} key={`product-${product?.id}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Homepage;
