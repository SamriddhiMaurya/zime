import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        If you have any questions, feedback, or inquiries, please don't hesitate
        to reach out to us. We value your input and are always striving to
        improve our services.
      </p>
      <div className="contact-info">
        <p>
          Email: <a href="mailto:info@poststable.com">info@poststable.com</a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890">+1 (234) 123-5685</a>
        </p>
        <p>Address:Noida Sector 62 , Gautam Buddha Nagar </p>
      </div>
    </div>
  );
};

export default Contact;
