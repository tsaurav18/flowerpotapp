import React, { useState, useEffect } from "react";
import Product from "./Product";
import "../pages/Home.css";
import { db, auth } from "../../firebase";
import Search from "./Search";
import { useStateValue } from "../StateProvider";

function Home() {
  const [item, setItem] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();
  const [productWithRow, setProductWithRow] = useState([]);

  useEffect(() => {
    db.collection("dbproductitems").onSnapshot((snapshot) => {
      setItem(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      <Search />
      <div className="home">
        <div className="home_container">
          <h2>New Arrivals </h2>

          {/* <div className="home_row"> */}
          {item.map((i) => (
            <Product
              id={i.id}
              title={i.title}
              image={i.image}
              rating={parseInt(i.rating)}
              price={parseInt(i.price)}
            />
          ))}
          {/* </div> */}
          <h2>Top Products </h2>
          <div className="home_row"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
