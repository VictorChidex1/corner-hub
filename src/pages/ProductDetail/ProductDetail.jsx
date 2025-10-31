import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Your exact 12 sample products (unchanged)
  const sampleProducts = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
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
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
      description: "Flowy summer dress perfect for warm days",
      category: "women",
    },
    {
      id: 5,
      name: "Baseball Cap",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500",
      description: "Adjustable cotton cap with embroidered logo",
      category: "accessories",
    },
    {
      id: 6,
      name: "Silver Necklace",
      price: 45.99,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
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

  const product = sampleProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container">
        <div className="product-not-found">
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <button onClick={() => navigate("/")} className="btn btn-primary">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart(product);
    }
    // Optional: Show a success message or notification
  };

  const getCategoryName = (categoryId) => {
    const categories = {
      men: "Men's Fashion",
      women: "Women's Fashion",
      shoes: "Footwear",
      accessories: "Accessories",
      jewelry: "Jewelry",
    };
    return categories[categoryId] || categoryId;
  };

  return (
    <div className="container">
      <div className="product-detail">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb">
          <button onClick={() => navigate("/")} className="breadcrumb-link">
            Home
          </button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>

        <div className="product-detail-grid">
          {/* Product Image */}
          <div className="product-image-section">
            <img
              src={product.image}
              alt={product.name}
              className="product-detail-image"
            />
          </div>

          {/* Product Info */}
          <div className="product-info-section">
            <div className="product-category-tag">
              {getCategoryName(product.category)}
            </div>

            <h1 className="product-detail-name">{product.name}</h1>

            <p className="product-detail-description">{product.description}</p>

            <div className="product-detail-price">${product.price}</div>

            <div className="product-actions">
              <button
                onClick={handleAddToCart}
                className="add-to-cart-btn large"
              >
                Add to Cart
              </button>

              <button
                onClick={() => navigate("/")}
                className="continue-shopping-btn"
              >
                Continue Shopping
              </button>
            </div>

            {/* Product Features */}
            <div className="product-features">
              <div className="feature-item">
                <span className="feature-icon">🚚</span>
                <div>
                  <strong>Free Shipping</strong>
                  <p>On orders over $50</p>
                </div>
              </div>

              <div className="feature-item">
                <span className="feature-icon">↩️</span>
                <div>
                  <strong>Easy Returns</strong>
                  <p>30-day return policy</p>
                </div>
              </div>

              <div className="feature-item">
                <span className="feature-icon">🔒</span>
                <div>
                  <strong>Secure Payment</strong>
                  <p>Your data is protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="related-products">
          <h2>You Might Also Like</h2>
          <div className="related-products-grid">
            {sampleProducts
              .filter(
                (p) => p.category === product.category && p.id !== product.id
              )
              .slice(0, 4)
              .map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="related-product-card"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="related-product-image"
                  />
                  <h4>{relatedProduct.name}</h4>
                  <p className="related-product-price">
                    ${relatedProduct.price}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
