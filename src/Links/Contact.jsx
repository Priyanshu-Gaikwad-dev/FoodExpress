import React, { useState } from "react";
import Header from "../Container/Header";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch("https://6788e5b22c874e66b7d6c2da.mockapi.io/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();
      console.log("Form submitted successfully:", data);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <Header />
      
      <div className="contact-content">
        <div className="contact-container">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-description">
            We'd love to hear from you! Reach out to us for any queries, support,
            or feedback.
          </p>

          <div className="contact-details">
            <h2 className="contact-subtitle">Get in Touch</h2>
            <p className="contact-info">
              Email:{" "}
              <a href="mailto:support@swiggey.com" className="contact-link">
                support@swiggey.com
              </a>
            </p>
            <p className="contact-info">Phone: +91 12345 67890</p>
            <p className="contact-info">Address: Swiggey HQ, Bangalore, India</p>

            <h2 className="contact-subtitle">Follow Us</h2>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-container">
          <h2 className="form-title">Send Us a Message</h2>
          
          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="alert success">
              Thank you for contacting us! We'll get back to you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="alert error">
              There was an error submitting your form. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span> Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;