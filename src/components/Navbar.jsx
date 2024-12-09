import React, { useState } from "react";
import Logo from "../assets/logo-cropped-2.png";
import FacebookLogo from "../assets/icons8-facebook.svg";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useEffect } from "react";

const navbar = () => {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent()}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };
  return (
    <header>
      <div className="contact">
        <div className="email">
          <Mailto
            className="email-link"
            email="jbakindevelopments@hotmail.com"
            subject=""
            body=""
          >
            jbakindevelopments@hotmail.com
          </Mailto>
        </div>
        <div className="phone-number">
          <Callto phone="07827028940">07827028940</Callto>
        </div>
      </div>

      <div className="logo-container">
        <img className="logo-img" src={Logo} alt="Logo" />
      </div>
      <a href="https://www.facebook.com/profile.php?id=61556660973348">
        {" "}
        <img className="facebook-logo" src={FacebookLogo} alt="facebook-logo" />
      </a>
    </header>
  );
};

export default navbar;
