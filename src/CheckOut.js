import React from "react";
import { useStateValue } from "./StateProvider";
import CheckOutProduct from "./CheckOutProduct";
import Subtotal from "./Subtotal";

import "./checkout.css";

function CheckOut() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/citiemi/Citi_EMI_Fest_LP_1500x.jpg"
          alt=""
        />

        {basket?.length == 0 ? ( //this ? sign so important. it prrevent error if you get basket undefine
          <div>
            <h1>Your Shopping basket is empty</h1>
            <p>
              You have no item in your basket. To buy one go and "Add to Basket"
              next to the item
            </p>
          </div>
        ) : (
          <div>
            <h1 className="checkout_title">Your Shoping Basket</h1>
            {/* list out all the checkout product */}
            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {
        //if anything is preset=nt in my basket show subtotal
        basket.length > 0 && (
          <div className="checkout_right">
            <Subtotal />
          </div>
        )
      }
    </div>
  );
}

export default CheckOut;
