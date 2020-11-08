import React from "react";
import "./Footer.css";
import { Button } from "../../pages/Button";
import { Link } from "react-router-dom";
import { GiFlowerPot } from "react-icons/gi";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <GiFlowerPot className="navbar-icon" />
              <span style={{ color: "green" }}>Green</span>Queen
            </Link>
          </div>
          <small className="website-rights">Green Queen © 2020</small>
          <div className="social-icons">
            <a
              className="social-icon-link"
              href="https://www.facebook.com/jannuroladiya"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              className="social-icon-link"
              href="https://www.instagram.com/greenqueenfabricpots"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className="social-icon-link"
              href={"https://www.youtube.com/channel/UCAqIbOlN_6M3amdtdAMJRGw"}
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </a>
            <a
              className="social-icon-link"
              href="https://twitter.com/SFabricpots"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              className="social-icon-link"
              href="https://www.linkedin.com/in/sagar-vashist-9b4395146"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
