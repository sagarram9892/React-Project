import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png"

function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ed3662ac-7f40-47cb-91ae-d563438968d4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  
    return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />{" "}
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
          aperiam nam odit accusantium quod soluta deserunt tempore excepturi
          consequuntur, obcaecati architecto commodi. Et, recusandae. Molestias
          eligendi laboriosam laudantium totam vel.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> sagarj2803@gmail.com{" "}
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" /> +919892776540
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" />
            Shivaji nagar , marol , <br /> andheri east , Mumbai-59
          </li>
        </ul>
      </div>
      <div className="contact-col" >
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your mobile number"
            required
          />
          <label>Write Your Message Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
          Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
