import React from "react";
import "./Contact.css";

import ContactComponent from "./ContactComponent";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Contact() {
  return (
    <>
      {" "}
      <ContactComponent {...homeObjOne} />
    </>
  );
}

export default Contact;
