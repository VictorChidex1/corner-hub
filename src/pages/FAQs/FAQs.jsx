import { useState } from "react";
import "./FAQs.css";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveIndex(null); // Close any open FAQs when changing category
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setActiveIndex(null); // Close any open FAQs when searching
  };

  const faqData = [
    {
      question: "How fast can I expect my order to arrive?",
      answer:
        "Most orders ship within 24 hours! Standard delivery takes 3-5 business days, while express shipping gets your fashion finds to you in 1-2 days. We also offer same-day delivery in select metropolitan areas.",
      category: "shipping",
    },
    {
      question: "What if my items don't fit perfectly?",
      answer:
        "No worries! We offer free returns within 30 days. All items must be in original condition with tags attached. Our hassle-free return process makes it easy to exchange or get a full refund.",
      category: "returns",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Absolutely! We ship to over 50 countries worldwide. International shipping typically takes 7-14 business days. Customs fees may apply depending on your country's regulations.",
      category: "shipping",
    },
    {
      question: "How can I track my fashion order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email and SMS. You can also check real-time updates in your account dashboard. Our tracking shows every step of your package's journey!",
      category: "account",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and even cryptocurrency for the fashion-forward tech enthusiasts!",
      category: "payment",
    },
    {
      question: "Do you have a loyalty program?",
      answer:
        "Yes! Join our Style Rewards program to earn points on every purchase. Get exclusive discounts, early access to sales, birthday surprises, and VIP treatment as you shop with us.",
      category: "account",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all items in original condition with tags attached. Return shipping is free, and refunds are processed within 5-7 business days after we receive your return.",
      category: "returns",
    },
    {
      question: "How do I know what size to order?",
      answer:
        "We provide detailed size charts for each product. You can also check customer reviews for fit advice. If you're still unsure, our customer service team is happy to help you find the perfect fit!",
      category: "product",
    },
    {
      question: "Do you offer student discounts?",
      answer:
        "Yes! Students get 15% off their first order and 10% off all subsequent orders. Simply verify your student status during checkout to enjoy these exclusive discounts.",
      category: "payment",
    },
    {
      question: "Can I modify or cancel my order?",
      answer:
        "You can modify or cancel your order within 1 hour of placement. After that, orders enter our processing system and cannot be changed. Contact us immediately if you need to make changes.",
      category: "account",
    },
    {
      question: "What are your shipping costs?",
      answer:
        "We offer free standard shipping on all orders over $50. For orders under $50, standard shipping is $4.99. Express shipping is available for $9.99 and overnight shipping for $19.99.",
      category: "shipping",
    },
    {
      question: "How do exchanges work?",
      answer:
        "Exchanges are easy! Simply contact our support team within 30 days of receiving your order. We'll provide a prepaid return label and process your exchange once we receive the original items.",
      category: "returns",
    },
    {
      question: "Do you offer gift cards?",
      answer:
        "Yes! We offer digital gift cards in any amount from $10 to $500. They never expire and can be used for any purchase on our website. Perfect for gift-giving!",
      category: "payment",
    },
    {
      question: "How do I create an account?",
      answer:
        "Click on 'Sign Up' in the top navigation and enter your email address and password. You can also sign up using your Google or Facebook account for faster registration.",
      category: "account",
    },
    {
      question: "What materials are your products made from?",
      answer:
        "We use high-quality materials including organic cotton, sustainable fabrics, and premium synthetics. Each product page includes detailed material information to help you make informed choices.",
      category: "product",
    },
    {
      question: "Do your products come with a warranty?",
      answer:
        "Yes! Most of our products come with a 1-year manufacturer's warranty against defects. Electronics and special items may have extended warranties - check individual product pages for details.",
      category: "warranty",
    },
    {
      question: "How should I care for my clothing items?",
      answer:
        "Each product comes with specific care instructions on the label. Generally, we recommend washing in cold water, tumble drying on low, and avoiding bleach to maintain quality and color.",
      category: "warranty",
    },
    {
      question: "Do you offer seasonal sales?",
      answer:
        "Absolutely! We have major sales during Black Friday, Cyber Monday, End-of-Season clearance, and holiday events. Subscribe to our newsletter to get early access to all promotions.",
      category: "promotions",
    },
    {
      question: "How do I apply discount codes?",
      answer:
        "Enter your discount code in the 'Promo Code' field during checkout. The discount will be automatically applied to your order total before payment.",
      category: "promotions",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes! We use industry-standard SSL encryption to protect your payment information. We never store your full credit card details on our servers.",
      category: "security",
    },
    {
      question: "How do you protect my personal data?",
      answer:
        "We are GDPR compliant and only collect necessary data to process your orders. We never sell your data to third parties. Read our Privacy Policy for full details.",
      category: "security",
    },
    {
      question: "What is your price match policy?",
      answer:
        "We offer a 30-day price match guarantee. If you find the same item for less on another authorized retailer, contact us with proof and we'll match the price.",
      category: "promotions",
    },
    {
      question: "How long does the warranty last?",
      answer:
        "Standard warranty is 1 year from purchase date. For electronics and premium items, warranty can extend up to 2 years. Keep your receipt for warranty claims.",
      category: "warranty",
    },
    {
      question: "Which countries do you ship to?",
      answer:
        "We currently ship to over 100 countries worldwide. During checkout, you can select your country to see available shipping options and costs.",
      category: "international",
    },

    // Corporate & Bulk Orders
    {
      question: "Do you offer corporate discounts?",
      answer:
        "Yes! We offer special pricing for corporate accounts and bulk orders. Contact our corporate sales team for customized quotes and volume discounts.",
      category: "corporate",
    },

    // Sustainability & Ethics
    {
      question: "Are your products ethically sourced?",
      answer:
        "We are committed to ethical sourcing and sustainability. All our suppliers must comply with our strict code of conduct regarding labor practices and environmental standards.",
      category: "sustainability",
    },
  ];

  // Filter FAQs based on category and search term
  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryLabels = {
    all: "All Questions",
    shipping: "Shipping & Delivery",
    returns: "Returns & Exchanges",
    payment: "Payment & Pricing",
    product: "Product & Sizing",
    account: "Account & Orders",
    warranty: "Warranty & Care",
    promotions: "Promotions & Discounts",
    security: "Security & Privacy",
    international: "International Orders",
    corporate: "Corporate & Bulk Orders",
    sustainability: "Sustainability & Ethics",
  };

  return (
    <div className="container">
      <div className="faqs-page">
        {/* Header Section */}
        <section className="faqs-header">
          <h1>Frequently Asked Questions</h1>
          <p>
            Find quick answers to common questions about shopping at Corner Hub.
            Can't find what you're looking for?{" "}
            <a href="/contact">Contact our support team</a>.
          </p>
        </section>

        {/* Search Bar */}
        <div className="faqs-search">
          <div className="search-input-container">
            <input
              type="text"
              placeholder="Search FAQs..."
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="search-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="faq-categories">
          <h2>Browse by Category</h2>
          <div className="categories-grid">
            {Object.entries(categoryLabels).map(([key, label]) => (
              <button
                key={key}
                className={`category-btn ${
                  activeCategory === key ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No FAQs found</h3>
              <p>
                Try adjusting your search terms or select a different category.
              </p>
            </div>
          )}
        </div>

        {/* Still Need Help Section */}
        <section className="help-section">
          <div className="help-content">
            <h2>Still need help?</h2>
            <p>
              Our customer support team is here to assist you with any questions
              or concerns you may have.
            </p>
            <div className="help-buttons">
              <a href="/contact" className="btn btn-primary">
                Contact Support
              </a>
              <a href="tel:+15551234567" className="btn btn-secondary">
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQs;
