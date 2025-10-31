import "./ShippingPolicy.css";
const ShippingPolicy = () => {
  return (
    <div className="container">
      <div className="shipping-policy-page">
        {/* Header Section */}
        <section className="policy-header">
          <h1>Shipping Policy</h1>
          <p>
            We're committed to getting your fashion finds to you quickly and
            safely. Here's everything you need to know about our shipping
            process.
          </p>
        </section>

        {/* Main Content */}
        <div className="policy-content">
          {/* Shipping Methods */}
          <section className="policy-section">
            <h2>🚚 Shipping Methods & Delivery Times</h2>
            <div className="shipping-methods">
              <div className="shipping-method">
                <div className="method-icon">📦</div>
                <div className="method-info">
                  <h3>Standard Shipping</h3>
                  <p className="delivery-time">3-5 Business Days</p>
                  <p className="method-description">
                    Free on orders over $50. Perfect for regular shopping with
                    reliable delivery.
                  </p>
                  <p className="method-price">$4.99 (Free over $50)</p>
                </div>
              </div>

              <div className="shipping-method">
                <div className="method-icon">⚡</div>
                <div className="method-info">
                  <h3>Express Shipping</h3>
                  <p className="delivery-time">1-2 Business Days</p>
                  <p className="method-description">
                    Need it fast? Express shipping gets your fashion to you in
                    no time.
                  </p>
                  <p className="method-price">$9.99</p>
                </div>
              </div>

              <div className="shipping-method">
                <div className="method-icon">🏃‍♂️</div>
                <div className="method-info">
                  <h3>Same Day Delivery</h3>
                  <p className="delivery-time">Same Day (Select Areas)</p>
                  <p className="method-description">
                    Available in major metropolitan areas for orders placed
                    before 2 PM.
                  </p>
                  <p className="method-price">$14.99</p>
                </div>
              </div>
            </div>
          </section>

          {/* Processing Time */}
          <section className="policy-section">
            <h2>⏰ Order Processing</h2>
            <div className="processing-info">
              <div className="processing-step">
                <span className="step-number">1</span>
                <div className="step-content">
                  <h3>Order Confirmation</h3>
                  <p>
                    You'll receive an order confirmation email immediately after
                    your purchase.
                  </p>
                </div>
              </div>
              <div className="processing-step">
                <span className="step-number">2</span>
                <div className="step-content">
                  <h3>Order Processing</h3>
                  <p>
                    We process and prepare your order within 24 hours during
                    business days.
                  </p>
                </div>
              </div>
              <div className="processing-step">
                <span className="step-number">3</span>
                <div className="step-content">
                  <h3>Order Shipped</h3>
                  <p>
                    You'll receive a shipping confirmation email with tracking
                    information.
                  </p>
                </div>
              </div>
              <div className="processing-step">
                <span className="step-number">4</span>
                <div className="step-content">
                  <h3>Out for Delivery</h3>
                  <p>Your fashion items are on their way to your doorstep!</p>
                </div>
              </div>
            </div>
          </section>

          {/* Shipping Destinations */}
          <section className="policy-section">
            <h2>🌍 Shipping Destinations</h2>
            <div className="shipping-destinations">
              <div className="destination-card">
                <h3>🇺🇸 Domestic Shipping</h3>
                <ul>
                  <li>Free standard shipping on orders over $50</li>
                  <li>All 50 states covered</li>
                  <li>No remote area surcharges</li>
                  <li>Signature required for orders over $200</li>
                </ul>
              </div>
              <div className="destination-card">
                <h3>🌐 International Shipping</h3>
                <ul>
                  <li>Available to 50+ countries</li>
                  <li>7-14 business days delivery</li>
                  <li>Customs and import taxes may apply</li>
                  <li>Real-time tracking included</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Important Information */}
          <section className="policy-section">
            <h2>📋 Important Information</h2>
            <div className="important-info">
              <div className="info-card">
                <h3 className="info-text">📦 Package Tracking</h3>
                <p className="info-text">
                  All orders include tracking numbers. You can track your
                  package directly from your order confirmation email or through
                  your account dashboard.
                </p>
              </div>
              <div className="info-card">
                <h3 className="info-text">🏠 Delivery Instructions</h3>
                <p className="info-text">
                  You can add special delivery instructions during checkout. Our
                  delivery partners will do their best to accommodate your
                  requests.
                </p>
              </div>
              <div className="info-card">
                <h3 className="info-text">🕒 Business Days</h3>
                <p className="info-text">
                  Our shipping times are based on business days (Monday-Friday,
                  excluding holidays). Orders placed on weekends will be
                  processed the next business day.
                </p>
              </div>
              <div className="info-card">
                <h3 className="info-text">📧 Contact Carrier</h3>
                <p className="info-text">
                  If your package shows as delivered but you haven't received
                  it, please contact the shipping carrier directly first, then
                  reach out to our support team.
                </p>
              </div>
            </div>
          </section>

          {/* Restrictions & Limitations */}
          <section className="policy-section">
            <h2>🚫 Shipping Restrictions</h2>
            <div className="restrictions">
              <div className="restriction-item">
                <h4>⏳ Processing Delays</h4>
                <p>
                  During high-volume periods (holidays, sales events),
                  processing may take up to 48 hours. We'll notify you if there
                  are any significant delays.
                </p>
              </div>
              <div className="restriction-item">
                <h4>📍 Address Changes</h4>
                <p>
                  Address changes can only be made within 1 hour of order
                  placement. After that, changes may not be possible as we
                  process orders quickly.
                </p>
              </div>
              <div className="restriction-item">
                <h4>📦 Undeliverable Packages</h4>
                <p>
                  Packages that are returned to us as undeliverable will be
                  refunded minus shipping costs. Please ensure your address is
                  correct.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <section className="support-section">
            <h2>❓ Need Help with Shipping?</h2>
            <p>
              If you have any questions about our shipping policy or need
              assistance with your order, our customer service team is here to
              help!
            </p>
            <div className="support-actions">
              <a href="/contact" className="btn btn-primary">
                Contact Support
              </a>
              <a href="tel:+15551234567" className="btn btn-secondary">
                Call Us: +1 (555) 123-4567
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
