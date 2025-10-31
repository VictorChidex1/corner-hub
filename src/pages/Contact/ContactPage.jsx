import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="container">
      <div className="contact-page">
        {/* Header Section */}
        <section className="contact-header">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </section>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <p>support@cornerhub.com</p>
                  <p>sales@cornerhub.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                  <p>Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Address</h3>
                  <p>123 Fashion Street</p>
                  <p>Style City, SC 12345</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <div>
                  <h3>Live Chat</h3>
                  <p>Available 24/7</p>
                  <p>Quick responses</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="business-hours">
              <h3>Business Hours</h3>
              <div className="hours-list">
                <div className="hour-item">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="hour-item">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="hour-item">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How fast can I expect my order to arrive?</h3>
              <p>
                Most orders ship within 24 hours! Standard delivery takes 3-5
                business days, while express shipping gets your fashion finds to
                you in 1-2 days. We also offer same-day delivery in select
                metropolitan areas.
              </p>
            </div>
            <div className="faq-item">
              <h3>What if my items don't fit perfectly?</h3>
              <p>
                No worries! We offer free returns within 30 days. All items must
                be in original condition with tags attached. Our hassle-free
                return process makes it easy to exchange or get a full refund.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer international shipping?</h3>
              <p>
                Absolutely! We ship to over 50 countries worldwide.
                International shipping typically takes 7-14 business days.
                Customs fees may apply depending on your country's regulations.
              </p>
            </div>
            <div className="faq-item">
              <h3>How can I track my fashion order?</h3>
              <p>
                Once your order ships, you'll receive a tracking number via
                email and SMS. You can also check real-time updates in your
                account dashboard. Our tracking shows every step of your
                package's journey!
              </p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>
                We accept all major credit cards (Visa, MasterCard, American
                Express), PayPal, Apple Pay, Google Pay, and even cryptocurrency
                for the fashion-forward tech enthusiasts!
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you have a loyalty program?</h3>
              <p>
                Yes! Join our Style Rewards program to earn points on every
                purchase. Get exclusive discounts, early access to sales,
                birthday surprises, and VIP treatment as you shop with us.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
