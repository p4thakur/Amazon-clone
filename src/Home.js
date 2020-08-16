import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/WFH/Header/WFH_1500x350.gif"
        alt="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/GW-JULY/1X_AuCC_Alarms._CB428378209_.jpg"
      />

      {/* product id, title, rating, price image */}
      <div className="home_row">
        <Product
          id="123455"
          title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
          price={120}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L._AC_US240_FMwebp_QL65_.jpg"
        />
        <Product
          id="123455"
          title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
          price={120}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/31DUeeauN-L._AC_US240_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="123455"
          title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
          price={120}
          rating={5}
          image="https://m.media-amazon.com/images/I/71evtyMeLiL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="123455"
          title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
          price={120}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L._AC_US240_FMwebp_QL65_.jpg"
        />
        <Product
          id="123455"
          title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
          price={120}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L._AC_US240_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="123455"
          title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
          price={120}
          rating={5}
          image="https://m.media-amazon.com/images/I/51odsYyURHL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
