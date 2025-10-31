import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">Corner Hub</h3>
            <p className="footer-description">
              Your ultimate fashion destination. Discover amazing fashion for
              everyone with fast delivery and exceptional customer service.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                Facebook
              </a>
              <a href="#" className="social-link">
                Instagram
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Shop</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">All Products</Link>
              </li>
              <li>
                <a href="#categories">Men's Fashion</a>
              </li>
              <li>
                <a href="#categories">Women's Fashion</a>
              </li>
              <li>
                <a href="#categories">Footwear</a>
              </li>
              <li>
                <a href="#categories">Accessories</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h4 className="footer-heading">Customer Service</h4>
            <ul className="footer-links">
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/shipping-policy">Shipping Policy</a>
              </li>
              <li>
                <a href="/returns-refunds">Returns & Refunds</a>
              </li>
              <li>
                <a href="/size-guide">Size Guide</a>
              </li>
              <li>
                <a href="/faqs">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="contact-info">
              <p>📧 support@cornerhub.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Fashion Street, Style City</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Corner Hub. All rights reserved.</p>
            <div className="payment-methods">
              <span>We accept:</span>
              <div className="payment-icons">
                <span>💳</span>
                <span>📱</span>
                <span>🏦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
