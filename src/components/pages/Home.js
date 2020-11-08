import React from "react";
import Product from "./Product";
import "../pages/Home.css";
import Search from "./Search";
function Home() {
  return (
    <>
      <Search />
      <div className="home">
        <div className="home_container">
          <h2>New Arrivals </h2>
          <div className="home_row">
            <Product
              id="12"
              title="new fency pot"
              image="https://www.grassrootsfabricpots.com/wp-content/uploads/5-and-10-gallon-fabric-pots-by-grassroots.jpg"
              rating={4}
              price={6}
            />
          </div>
          <h2>Top Products </h2>
          <div className="home_row">
            <Product
              id="1"
              title="White fabic fancy pot"
              image="https://grohydro.co.za/wp-content/uploads/2018/10/FREEDOM-FARMS-POTS-VELCRO.jpg"
              rating={4}
              price={10}
            />
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
