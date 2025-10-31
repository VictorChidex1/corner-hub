import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"; // ADDED FOOTER IMPORT
import ProductCard from "./components/ProductCard/ProductCard";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CartPage from "./pages/Cart/CartPage";
import AuthPage from "./pages/Auth/AuthPage";
import ContactPage from "./pages/Contact/ContactPage"; // Add this line
import ShippingPolicy from "./pages/ShippingPolicy/ShippingPolicy"; // Add this import
import ReturnsRefunds from "./pages/ReturnsRefunds/ReturnsRefunds";
import SizeGuide from "./pages/SizeGuide/SizeGuide";
import FAQs from "./pages/FAQs/FAQs";
import AboutUs from "./pages/AboutUs/AboutUs";
import "./styles/globals.css";

// Sample products data - unchanged
const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    description: "Premium cotton t-shirt for everyday comfort",
    category: "men",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500",
    description: "Vintage style denim jacket for a casual look",
    category: "women",
  },
  {
    id: 3,
    name: "Running Sneakers",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    description: "Lightweight running shoes with premium cushioning",
    category: "shoes",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 65.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    description: "Flowy summer dress perfect for warm days",
    category: "women",
  },
  {
    id: 5,
    name: "Baseball Cap",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500",
    description: "Adjustable cotton cap with embroidered logo",
    category: "accessories",
  },
  {
    id: 6,
    name: "Silver Necklace",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
    description: "Elegant silver necklace with minimalist design",
    category: "jewelry",
  },
  {
    id: 7,
    name: "Desert Chill Set",
    price: 71.99,
    image: "/images/products/men-casual-wear3.jpg",
    description: "Effortless casual comfort, perfect for warm weather.",
    category: "men",
  },
  {
    id: 8,
    name: "DVacay Knit Set",
    price: 74.99,
    image: "/images/products/men-casual-wear4.jpg",
    description: "Textured knit comfort for stylish resort living.",
    category: "men",
  },
  {
    id: 9,
    name: "Coastal Stripe Duo",
    price: 72.99,
    image: "/images/products/men-casual-wear5.jpg",
    description: "Vibrant striped shirt and shorts, vacation ready.",
    category: "men",
  },
  {
    id: 10,
    name: "Adiddas Swift Hikers",
    price: 71.99,
    image: "/images/products/adidas3.jpg",
    description: "Gore-Tex waterproof hiking shoes for ultimate adventure.",
    category: "shoes",
  },
  {
    id: 11,
    name: "Air Monarch IV",
    price: 73.99,
    image: "/images/products/Nikeshoe.jpg",
    description: "Classic training shoe, comfort for everyday wear.",
    category: "shoes",
  },
  {
    id: 12,
    name: "Tactical Desert Boots",
    price: 84.99,
    image: "/images/products/umc2.jpg",
    description: "Durable, high-grip boots for rugged terrain.",
    category: "shoes",
  },
];

// Categories data
const CATEGORIES = [
  { id: "all", name: "All Products", icon: "🛍️", count: "12+" },
  { id: "men", name: "Men's Fashion", icon: "👔", count: "4+" },
  { id: "women", name: "Women's Fashion", icon: "👗", count: "2+" },
  { id: "shoes", name: "Footwear", icon: "👟", count: "4+" },
  { id: "accessories", name: "Accessories", icon: "🕶️", count: "1+" },
  { id: "jewelry", name: "Jewelry", icon: "💎", count: "1+" },
];

function App() {
  // State management
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Cart management functions
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Search and filter handlers
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Search logic is handled in the filteredProducts calculation
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setActiveCategory("all");
  };

  // Filter products based on search and category
  const filteredProducts = SAMPLE_PRODUCTS.filter((product) => {
    const categoryMatch =
      activeCategory === "all" || product.category === activeCategory;

    if (!searchQuery.trim()) return categoryMatch;

    const query = searchQuery.toLowerCase();
    const searchMatch =
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);

    return categoryMatch && searchMatch;
  });

  // Calculate total cart items for header
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Get current category name for display
  const getCurrentCategoryName = () => {
    if (searchQuery) return "Search Results";
    if (activeCategory === "all") return "Featured Products";
    return (
      CATEGORIES.find((cat) => cat.id === activeCategory)?.name || "Products"
    );
  };

  // Homepage component
  const HomePage = () => (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Corner Hub! 🛍️</h1>
        <p>Discover amazing fashion for everyone</p>
      </section>

      {/* Category Section */}
      <section className="category-section">
        <div className="section-header">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">
            Explore our wide range of fashion categories and find your perfect
            style
          </p>
        </div>

        <div className="categories-grid">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className={`category-card ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => handleCategoryChange(category.id)}
            >
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-name">{category.name}</h3>
              <span className="category-count">{category.count} items</span>
            </div>
          ))}
        </div>
      </section>

      {/* Active Filters */}
      {(searchQuery || activeCategory !== "all") && (
        <div className="active-filters">
          <button onClick={clearAllFilters} className="clear-filters">
            Clear All Filters
          </button>
        </div>
      )}

      {/* Products Section */}
      <section className="products-section">
        <h2>{getCurrentCategoryName()}</h2>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria</p>
            <button onClick={clearAllFilters} className="btn btn-primary">
              View All Products
            </button>
          </div>
        )}
      </section>
    </div>
  );

  return (
    <Router>
      <div className="app">
        {/* Header with navigation */}
        <Header
          cartCount={totalCartItems}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSearchSubmit={handleSearchSubmit}
        />

        {/* Main content area */}
        <main>
          <Routes>
            {/* Homepage */}
            <Route path="/" element={<HomePage />} />

            {/* Product Detail Page */}
            <Route
              path="/product/:id"
              element={<ProductDetail addToCart={addToCart} />}
            />

            {/* Shopping Cart Page */}
            <Route
              path="/cart"
              element={
                <CartPage
                  cart={cart}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              }
            />

            {/* Authentication Page */}
            <Route path="/auth" element={<AuthPage />} />

            {/* Contact Us Page */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Shipping Policy Page */}
            <Route path="/shipping-policy" element={<ShippingPolicy />} />

            {/* Returns & Refunds Page */}
            <Route path="/returns-refunds" element={<ReturnsRefunds />} />

            {/* Size Guide */}
            <Route path="/size-guide" element={<SizeGuide />} />

            {/* FAQs */}
            <Route path="/faqs" element={<FAQs />} />

            {/* About Us */}
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>

        {/* ADDED FOOTER HERE */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
