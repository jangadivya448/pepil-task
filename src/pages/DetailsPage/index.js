import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import { useParams } from "react-router";

import "./detailspage.scss";

function DetailsPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState(null);
  const [moreDetails, setMoreDetails] = useState(false);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data?.id) {
          alert("Failed to fetch product detais");
          setProductDetails(null);
          setLoading(false);
          return;
        }
        setProductDetails(data);
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to fetch product detais");
        setLoading(false);
      });
  }, []);
  console.log("-->", productDetails);
  const {
    thumbnail,
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    availabilityStatus,
    stock,
    tags,
    brand,
    sku,
    weight,
    warrantyInformation,
    shippingInformation,
    reviews,
    returnPolicy,
  } = productDetails || {};
  return (
    <div className="details-page">
      <h1 className="title">Product Details Page</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          {productDetails ? (
            <div className="product-details">
              <div className="basic-details">
                <div className="field-wrap">
                  <img src={thumbnail} width={300} />
                </div>
                <div className="field-wrap">
                  <p className="detail">
                    <span>Price:</span>
                    <span className="detail-value">{price} ₹</span>
                  </p>
                  <p className="detail">
                    <span>Discount:</span>
                    <span className="detail-value">{discountPercentage} %</span>
                  </p>
                  <p className="detail">
                    <span>Rating:</span>{" "}
                    <span className="detail-value">{rating}</span>
                  </p>
                  <p className="detail">
                    <span>Avilability:</span>
                    <span className="detail-value">{availabilityStatus}</span>
                  </p>
                  <p className="detail">
                    <span>Category:</span>
                    <span className="detail-value">{category}</span>
                  </p>
                </div>
              </div>
              <h3 className="product-name">{title}</h3>
              <p className="product-desc">{description}</p>
              <p>Stock: {stock}</p>
              <p>Tags: {tags}</p>
              <p>Brand: {brand}</p>
              <p>SKU: {sku}</p>
              <p>
                <button onClick={() => setMoreDetails(!moreDetails)}>
                  View Details
                </button>
              </p>
              {moreDetails && (
                <div>
                  <p>Weight: {weight}</p>
                  <p>Warranty Information: {warrantyInformation}</p>
                  <p>Shipping Information: {shippingInformation}</p>
                  <p>Reviews:</p>
                  {reviews.map((review) => (
                    <p>
                      {review?.comment}({review?.rating} / 5) by{" "}
                      {review?.reviewerName}
                    </p>
                  ))}
                  <p>Return Policy: {returnPolicy}</p>
                </div>
              )}
            </div>
          ) : (
            <div>No details found</div>
          )}
        </>
      )}
    </div>
  );
}

export default DetailsPage;
