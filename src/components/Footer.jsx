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
    <div className="body">
      <div className="paragraph">
        <p>
          Welcome to our Lincoln based construction company! <br /> <br />
          We proudly serve Lincolnshire and Nottinghamshire, specializing in
          joinery and kitchens. We invite you to explore our gallery, showcasing
          examples of our previous work. If you have ideas you'd like to
          discuss, please don't hesitate to contact us today. We look forward to
          bringing your vision to life!
        </p>
      </div>

      <div className="footer">
        <div className="email-footer">
          <Mailto
            // className="email-link"
            email="jbakindevelopments@hotmail.com"
            subject=""
            body=""
          >
            Email Us
          </Mailto>
        </div>
        <div className="phone-footer">
          <Callto phone="07827028940">Call Us</Callto>
        </div>
      </div>
    </div>
  );
};

export default Footer;
