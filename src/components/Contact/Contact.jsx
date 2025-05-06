import React from "react";

import "./Contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b588215c-9ca3-449d-88ed-e78b9c37d702");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-all">
        <div className="contact-hr-h3">
          <hr />
          <h3>CONTACT US</h3>
        </div>
        <div className="para">
          <p>
            Have a project in mind or just want to connect? I'm always open to
            new opportunities, collaborations, or a friendly chat. Feel free to
            reach out — I'd love to hear from you!
          </p>
        </div>
        <div className="boxes">
          <a href="mailto:chauhanashish5555@gmail.com?subject=Hello&body=Hi%2C%20I%20wanted%20to%20get%20in%20touch%20with%20you!">
            E-MAIL
          </a>

          <a href="tel:+918477015848">PHONE</a>

          <a
            href="https://wa.me/918477015848?text=Hello%20there!"
            target="_blank"
          >
            WHATS-APP
          </a>
        </div>
        <div className="contact-form">
          <form onSubmit={onSubmit}>
            <div className="form-left">
              <input type="text" name="name" placeholder="Your Name" />
              <input type="email" name="email" placeholder="Your Email" />
              <input type="tel" name="phone" placeholder="Phone Number" />
            </div>

            <div className="form-right">
              <textarea name="message" placeholder="Your Message"></textarea>
              <button type="submit">{result ? result : "Send Message"}</button>
            </div>
          </form>

          <footer className="footer">
            <p>© 2025 Ashish Chauhan. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
