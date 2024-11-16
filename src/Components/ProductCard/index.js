import { useNavigate } from "react-router-dom";
import "./card.scss";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const {
    id,
    thumbnail,
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    availabilityStatus,
  } = product || {};
  const onCardClick = () => {
    navigate(`/${id}`);
  };
  return (
    <div className="card-container" onClick={onCardClick}>
      <div className="header">
        <div>
          <img src={thumbnail} alt="product" className="thumbnail" />
        </div>
        <div className="basic-details">
          <p className="detail">
            <span>Price:</span> <span className="detail-value">{price} ₹</span>
          </p>
          <p className="detail">
            <span>Discount:</span>
            <span className="detail-value">{discountPercentage} %</span>
          </p>
          <p className="detail">
            <span>Rating:</span> <span className="detail-value">{rating}</span>
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
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProductCard;
