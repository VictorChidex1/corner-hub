import React from "react";
import "./ReturnsRefunds.css";

const ReturnsRefunds = () => {
  return (
    <div className="returns-refunds">
      <div className="container">
        <div className="returns-refunds-header">
          <h1 className="policy-title">Returns & Refunds Policy</h1>
          <p className="last-updated">Last updated: October 2025</p>
        </div>

        <div className="returns-refunds-content">
          <section className="policy-section">
            <h2>Return Policy</h2>
            <p>
              We want you to be completely satisfied with your purchase from
              Corner Hub. If you're not happy with your order, you may return
              most items within 30 days of delivery.
            </p>

            <div className="policy-details">
              <h3>Eligibility for Returns:</h3>
              <ul>
                <li>Items must be returned within 30 days of delivery</li>
                <li>
                  Products must be unused, unworn, and in original condition
                </li>
                <li>All original tags and labels must be attached</li>
                <li>Items must be in their original packaging</li>
                <li>Proof of purchase is required</li>
              </ul>

              <h3>Non-returnable Items:</h3>
              <ul>
                <li>Underwear and swimwear (for hygiene reasons)</li>
                <li>Personalized or custom-made items</li>
                <li>Items marked as "Final Sale"</li>
                <li>Gift cards</li>
                <li>Beauty products that have been opened</li>
              </ul>
            </div>
          </section>

          <section className="policy-section">
            <h2>How to Return an Item</h2>
            <div className="return-steps">
              <div className="step">
                <span className="step-number">1</span>
                <div className="step-content">
                  <h4>Initiate Return</h4>
                  <p>
                    Log into your account and go to "Order History" to start the
                    return process.
                  </p>
                </div>
              </div>

              <div className="step">
                <span className="step-number">2</span>
                <div className="step-content">
                  <h4>Print Label</h4>
                  <p>
                    Print the prepaid shipping label provided and attach it to
                    your package.
                  </p>
                </div>
              </div>

              <div className="step">
                <span className="step-number">3</span>
                <div className="step-content">
                  <h4>Ship Package</h4>
                  <p>
                    Drop off your package at any authorized shipping location.
                  </p>
                </div>
              </div>

              <div className="step">
                <span className="step-number">4</span>
                <div className="step-content">
                  <h4>Receive Refund</h4>
                  <p>
                    Once we receive and inspect your return, we'll process your
                    refund within 5-7 business days.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>Refund Policy</h2>
            <div className="refund-details">
              <h3>Refund Processing:</h3>
              <ul>
                <li>
                  Refunds are processed within 5-7 business days after we
                  receive your return
                </li>
                <li>Refunds will be issued to the original payment method</li>
                <li>Shipping costs are non-refundable</li>
                <li>Sale items are eligible for store credit only</li>
              </ul>

              <h3>Late or Missing Refunds:</h3>
              <p>
                If you haven't received your refund after 10 business days,
                please check with your bank as it may take some time to process.
                If you still haven't received your refund, please contact us at{" "}
                <strong>support@cornerhub.com</strong>.
              </p>
            </div>
          </section>

          <section className="policy-section">
            <h2>Exchanges</h2>
            <p>
              We currently don't offer direct exchanges. If you need a different
              size or color, please return the original item for a refund and
              place a new order for the desired item.
            </p>
          </section>

          <section className="policy-section">
            <h2>Return Shipping</h2>
            <div className="shipping-info">
              <h3>Free Returns:</h3>
              <p>
                We offer free returns on all full-priced items within the
                contiguous United States. A return shipping fee may apply for
                international returns and sale items.
              </p>

              <h3>International Returns:</h3>
              <p>
                International customers are responsible for return shipping
                costs and any customs fees associated with the return. We
                recommend using a trackable shipping service.
              </p>
            </div>
          </section>

          <section className="policy-section">
            <h2>Damaged or Defective Items</h2>
            <p>
              If you receive a damaged or defective item, please contact us
              within 7 days of delivery at{" "}
              <strong>support@cornerhub.com</strong> with your order number and
              photos of the damaged item. We'll arrange for a free return and
              send you a replacement or full refund.
            </p>
          </section>

          <section className="contact-section">
            <div className="contact-header">
              <div className="contact-icon">💬</div>
              <h2>Need Help?</h2>
              <p className="contact-subtitle">
                Our support team is here to assist you with any questions about
                returns and refunds
              </p>
            </div>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-info">
                  <h4>Email Support</h4>
                  <p>We typically respond within 2 hours</p>
                  <a
                    href="mailto:support@cornerhub.com?subject=Returns%20%26%20Refunds%20Inquiry&body=Hello%20Corner%20Hub%20Team,"
                    className="contact-link email-link"
                  >
                    support@cornerhub.com
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div className="method-info">
                  <h4>Phone Support</h4>
                  <p>Speak directly with our support agents</p>
                  <a
                    href="tel:+15551234567"
                    className="contact-link phone-link"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">🕒</div>
                <div className="method-info">
                  <h4>Business Hours</h4>
                  <p>We're here when you need us</p>
                  <div className="contact-detail">
                    Monday - Friday: 9AM - 6PM EST
                    <br />
                    Saturday: 10AM - 4PM EST
                    <br />
                    Sunday: Closed
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <p className="cta-text">
                <strong>Quick Response Guarantee:</strong> We answer 90% of
                inquiries within 1 business day
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ReturnsRefunds;
