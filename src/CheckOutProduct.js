import React from "react";
import "./checkOutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckOutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id, //passing id to my action
    });
  };

  return (
    <div className="checkOutProduct">
      <img className="checkOutProduct_image" src={image} alt="" />

      <div className="checkOutProduct_info">
        <p className="checkOutProduct_title">{title}</p>
        <p className="product_price">
          <small>Rs</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill() //it mean fill array with blank .sizeof array=rating
            .map(() => (
              <p className="product_star">♠</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove this Product</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
