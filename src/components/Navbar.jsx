import React from "react";
import Logo from "../assets/logo-cropped-2.png";
import FacebookLogo from "../assets/icons8-facebook.svg";

const Mailto = ({ email, subject = "", body = "", children }) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return <a className="email" href={`mailto:${email}${params}`}>{children}</a>;
};

const Callto = ({ phone, children }) => {
  return <a className="phone-number" href={`tel:${phone}`}>{children}</a>;
};

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="contact">
        <Mailto className="contact-text" email="jbakindevelopments@hotmail.com">jbakindevelopments@hotmail.com</Mailto>
        <Callto className="contact-text" phone="07827028940">07827028940</Callto>
      </div>
      <div className="logo-container">
        <img className="logo-img" src={Logo} alt="Logo" />
      </div>
      <div className="facebook-logo-container"></div>
      <a href="https://www.facebook.com/profile.php?id=61556660973348">
        <img className="facebook-logo" src={FacebookLogo} alt="facebook-logo" />
      </a>
    </header>
  );
};

export default Navbar;