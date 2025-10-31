import { useState, useEffect } from "react";
import "./AboutUs.css";

// Remove the import statements and use public folder paths directly

// Safe import with fallback
let GiNecklace, GiDiamondRing, GiEarrings, GiGemPendant;

try {
  const gi = require("react-icons/gi");
  GiNecklace = gi.GiNecklace;
  GiDiamondRing = gi.GiDiamondRing;
  GiEarrings = gi.GiEarrings;
  GiGemPendant = gi.GiGemPendant;
} catch (error) {
  console.log("React Icons not available, using fallback");
  // Fallback component
  const FallbackIcon = () => <span>💎</span>;
  GiNecklace = FallbackIcon;
  GiDiamondRing = FallbackIcon;
  GiEarrings = FallbackIcon;
  GiGemPendant = FallbackIcon;
}

const AboutUs = () => {
  const [stats, setStats] = useState([
    { number: 0, label: "Happy Customers", suffix: "K+" },
    { number: 0, label: "Products Sold", suffix: "M+" },
    { number: 0, label: "Countries Served", suffix: "+" },
    { number: 0, label: "Team Members", suffix: "+" },
  ]);

  useEffect(() => {
    // Animate stats counting
    const animateStats = () => {
      const targetValues = [200, 1, 200, 50];
      const duration = 2000;
      const steps = 60;
      const stepValues = targetValues.map((value) => value / steps);

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setStats((prevStats) =>
          prevStats.map((stat, index) => {
            const target = targetValues[index];
            let currentValue;

            if (index === 1) {
              // Products Sold - smooth decimal counting
              currentValue = parseFloat((target * progress).toFixed(1));
            } else {
              // Other stats - integer counting
              currentValue = Math.floor(target * progress);
            }

            return {
              ...stat,
              number: currentValue,
            };
          })
        );

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    };

    animateStats();
  }, []);

  const teamMembers = [
    {
      name: "Victor Chidex",
      role: "CEO & Founder",
      image: "/images/products/Victor-Chidex.png", // Use public folder path
      description: "Visionary leader with 15+ years in fashion retail",
      social: [
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" },
      ],
    },
    {
      name: "Onyinye Esther",
      role: "Head of Design",
      image: "/images/products/Onyi-Esther.jpg", // Use public folder path
      description:
        "Award-winning designer with passion for sustainable fashion",
      social: [
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" },
      ],
    },
    {
      name: "Miriam Beauty",
      role: "Customer Experience",
      image: "/images/products/Miriam-Beauty.png", // Use public folder path
      description: "Dedicated to creating exceptional shopping experiences",
      social: [
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" },
      ],
    },
    {
      name: "Sandra Uju",
      role: "Operations Director",
      image: "/images/products/Sandra-Uju.jpeg", // Use public folder path
      description: "Ensuring seamless logistics and fast delivery",
      social: [
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" },
      ],
    },
  ];

  const values = [
    {
      icon: "🌱",
      title: "Sustainability",
      description:
        "We're committed to eco-friendly practices and sustainable sourcing across our supply chain.",
    },
    {
      icon: "💝",
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "Constantly evolving to bring you the latest trends and shopping technologies.",
    },
    {
      icon: "🤝",
      title: "Community",
      description:
        "Building relationships and supporting the communities we serve.",
    },
  ];

  return (
    <div className="container">
      <div className="about-us-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <h1>Our Story</h1>
            <p className="hero-subtitle">
              From a small boutique to your favorite fashion destination -
              discover the journey behind Corner Hub
            </p>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">
                    {stat.number}
                    {stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1">
              <span className="product-emoji">👟</span>
            </div>
            <div className="floating-card card-2">
              <span className="product-emoji">📿</span>
            </div>
            <div className="floating-card card-3">
              <span className="product-emoji">🛍️</span>
            </div>
            <div className="floating-card card-4">
              <span className="product-emoji">👗</span>
            </div>
            <div className="floating-card card-5">
              <span className="product-emoji">💎</span>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At Corner Hub, we believe that everyone deserves to express
                their unique style with confidence. We're dedicated to bringing
                you high-quality, fashionable products that don't break the
                bank, while providing an exceptional shopping experience from
                start to finish.
              </p>
              <p>
                Founded in 2018, we started as a small local boutique and have
                grown into a trusted online destination for fashion enthusiasts
                worldwide. Our journey is driven by passion, innovation, and an
                unwavering commitment to our customers.
              </p>
            </div>
            <div className="mission-visual">
              <div className="visual-grid">
                <div className="grid-item item-1">🌟</div>
                <div className="grid-item item-2">💫</div>
                <div className="grid-item item-3">✨</div>
                <div className="grid-item item-4">⭐</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The passionate people behind Corner Hub's success</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-member-photo"
                  />
                </div>
                <h3>{member.name}</h3>
                <div className="member-role">{member.role}</div>
                <p>{member.description}</p>
                <div className="member-social">
                  {member.social?.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      className="social-link"
                      aria-label={social.platform}
                    >
                      {social.platform === "linkedin" && "💼"}
                      {social.platform === "twitter" && "🐦"}
                      {social.platform === "instagram" && "📷"}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>Key milestones in our growth story</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h3>Founded</h3>
                <p>
                  Started as a small boutique in downtown with a vision to
                  revolutionize fashion retail
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <h3>Online Launch</h3>
                <p>
                  Expanded to e-commerce, reaching customers nationwide with our
                  unique collections
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>International Expansion</h3>
                <p>
                  Began shipping to over 50 countries, becoming a global fashion
                  destination
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3>Sustainability Initiative</h3>
                <p>
                  Launched our eco-friendly line and committed to carbon-neutral
                  operations
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Mobile App Launch</h3>
                <p>
                  Released our award-winning mobile app for seamless shopping on
                  the go
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Join Our Fashion Community</h2>
            <p>
              Be part of our growing family of style enthusiasts. Discover new
              trends, get exclusive offers, and experience fashion like never
              before.
            </p>
            <div className="cta-buttons">
              <a href="/" className="btn btn-primary">
                Start Shopping
              </a>
              <a href="/contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
