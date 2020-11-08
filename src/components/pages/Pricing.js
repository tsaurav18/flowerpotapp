import React from "react";
import { Button } from "./Button";
import "./Pricing.css";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Pricing</h1>
          <div className="pricing__container">
            <div className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <BsXDiamondFill />
                </div>
                <h3>Sizes</h3>

                <p>These are the rectangular shape pots</p>
                <ul className="pricing__container-features">
                  <li>24×10×10 (640 RS)</li>
                  <li> 24×8×8 (530Rs)</li>
                  <li>18×10×10 (470Rs)</li>
                  <li> 18×8×8 (420Rs)</li>
                </ul>
              </div>
            </div>

            <div className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <FaFire />
                </div>
                <h3>Price List</h3>
                <p>It's diameter height in inches</p>
                <ul className="pricing__container-features">
                  <li>5x5 (50₹)</li>
                  <li>8×8 (100₹)</li>
                  <li>10×9 (150₹)</li>
                  <li>12×10 (200₹)</li>
                  <li>14×11 (250₹)</li>
                  <li>14×14 (350₹)</li>
                  <li>16×12 (330₹)</li>
                  <li>18×13.5 (410₹)</li>
                  <li>20×15 (500₹)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
