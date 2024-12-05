import React from "react";

const Footer = () => {
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
    <div className="footer">
      <div className="email-footer">
        <Mailto
          className="email-link"
          email="jbakindevelopments@hotmail.com"
          subject=""
          body=""
        >
          Email us at jbakindevelopments@hotmail.com
        </Mailto>
      </div>
      <div className="phone-footer">
        <Callto phone="07827028940">Or call on 07827028940</Callto>
      </div>
    </div>
  );
};

export default Footer;
