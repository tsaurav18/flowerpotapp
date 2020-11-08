import React from "react";
import "./ContactComponent.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import GoogleMap from "./GoogleMap";

function ContactComponent({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  extra,
}) {
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div className="extra">{extra}</div>
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>

                <Button buttonSize="btn--wide" buttonColor="blue">
                  {buttonLabel}
                </Button>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactComponent;
