import React from "react";
import AddProductsdb from "./AddProductsdb";
import { Link } from "react-router-dom";
import "./Admin.css";

import ListProductdb from "./ListProductdb";

function Admin() {
  // const addProducts = () => {
  //   const element = document.querySelector(".products");

  //   element.style.display = "block";
  // };
  const fetchData = () => {
    const ele = document.querySelector(".Listproducts");

    ele.style.display = "block";
  };

  return (
    <>
      <div className="__container">
        <div className="__section">
          <div className="__navbar">
            <ul>
              {/* <li className="nav_items" onClick={fetchData}>
                Dasboard
              </li> */}
              <Link to={"addProductsdb"}>
                <li id="__addproduct" className="nav_items">
                  Add product
                </li>
              </Link>
              <li className="nav_items">Services</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="products">
        <AddProductsdb />
      </div>

      <div className="Listproducts">
        <ListProductdb />
      </div>
    </>
  );
}

export default Admin;
