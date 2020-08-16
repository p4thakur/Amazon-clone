import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  //I could have passed  props. what I am doing object destructring

  const [{ basket }, dispatch] = useStateValue(); //i dont need basket , I can avoid
  ///using it/ const[,dispatch]

  const addToBasket = () => {
    //add item to basket. this dispatch will call the action
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        //when key and value name same i can avoid usinf id : id
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
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
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
