import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = ({ cartCount, searchQuery, onSearchChange, onSearchSubmit }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !event.target.closest(".nav-group") &&
        !event.target.closest(".mobile-menu-toggle")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          {/* Logo */}
          <Link to="/" className="logo">
            <img
              src="/images/products/cornerhub2.jpg"
              alt="Corner Hub"
              className="logo-image"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>

          {/* Search Bar - Hidden on mobile when menu is open */}
          <div
            className={`search-bar ${isMobileMenuOpen ? "mobile-hidden" : ""}`}
          >
            <form className="search-form" onSubmit={onSearchSubmit}>
              <div className="search-input-container">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="search-input"
                />
                <button type="submit" className="search-button">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-group desktop-nav">
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#categories">Categories</a>
              </li>
              <li>
                <a href="#deals">Deals</a>
              </li>
            </ul>
            <div className="nav-actions">
              <Link to="/auth" className="auth-link">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Account</span>
              </Link>
              <Link to="/cart" className="cart-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
                <span>Cart</span>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Overlay */}
          {isMobileMenuOpen && (
            <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
              <div
                className="mobile-menu-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="mobile-menu-close" onClick={closeMobileMenu}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>

                <div className="mobile-nav-links">
                  <Link
                    to="/"
                    className="mobile-nav-link"
                    onClick={closeMobileMenu}
                  >
                    <span>Home</span>
                  </Link>
                  <a
                    href="#categories"
                    className="mobile-nav-link"
                    onClick={closeMobileMenu}
                  >
                    <span>Categories</span>
                  </a>
                  <a
                    href="#deals"
                    className="mobile-nav-link"
                    onClick={closeMobileMenu}
                  >
                    <span>Deals</span>
                  </a>
                  <Link
                    to="/auth"
                    className="mobile-nav-link"
                    onClick={closeMobileMenu}
                  >
                    <span>Account</span>
                  </Link>
                  <Link
                    to="/cart"
                    className="mobile-nav-link"
                    onClick={closeMobileMenu}
                  >
                    <span>Cart {cartCount > 0 && `(${cartCount})`}</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
