import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

// import { AnimatedList } from "react-animated-list";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  // const renderBasketItems = () => {
  //   return basket.map((item) => {
  //     return (
  //       <CheckoutProduct
  //         key={item.title}
  //         id={item.id}
  //         title={item.title}
  //         image={item.image}
  //         price={item.price}
  //         rating={item.rating}
  //       />
  //     );
  //   });
  // };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {/* 
          <AnimatedList animation={"zoom"}>{renderBasketItems()}</AnimatedList> */}

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <h2>the subtotal </h2>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
