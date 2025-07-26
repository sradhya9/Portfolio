import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setPopupMessage("Please fill in all fields.");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        "service_xo99bh8",     // Replace with your EmailJS Service ID
        "template_jgrk2vf",    // Replace with your EmailJS Template ID
        formRef.current,
        "qiTZ72mjeXw0BMxLG"      // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setPopupMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setPopupMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3s
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-bg"></div>
      <div className="contact-frame-img"></div>

      <div className="contact-heading">
        <span className="contact-title">Contact</span>
        <span className="contact-subtitle"> Me</span>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          className="contact-input"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="contact-input-1"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          className="contact-textarea"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" className="contact-submit-button" disabled={isSending}>
          <span className="contact-send-text">{isSending ? "Sending" : "Send"}</span>
        </button>
      </form>

      {/* Popup Message */}
      {showPopup && (
        <div className="contact-popup">
          <span>{popupMessage}</span>
        </div>
      )}
    </div>
  );
};

export default Contact;
