import { useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
  const navigate = useNavigate();

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTax = (subtotal) => {
    return subtotal * 0.08; // 8% tax
  };

  const calculateShipping = (subtotal) => {
    return subtotal > 50 ? 0 : 9.99;
  };

  const calculateTotal = (subtotal, tax, shipping) => {
    return subtotal + tax + shipping;
  };

  if (cart.length === 0) {
    return (
      <div className="container">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some products to your cart to see them here</p>
          <button onClick={() => navigate("/")} className="btn btn-primary">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const shipping = calculateShipping(subtotal);
  const total = calculateTotal(subtotal, tax, shipping);

  return (
    <div className="container">
      <div className="cart-page">
        {/* Cart Header */}
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <p className="cart-subtitle">
            {getTotalItems()} {getTotalItems() === 1 ? "item" : "items"} in your
            cart
          </p>
        </div>

        <div className="cart-layout">
          {/* Cart Items Section */}
          <div className="cart-items-section">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <div className="cart-item-info">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-description">{item.description}</p>
                    <p className="cart-item-category">{item.category}</p>
                    <p className="cart-item-price">${item.price}</p>
                  </div>

                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="quantity-btn"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="order-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>

              <div className="summary-row">
                <span>Subtotal ({getTotalItems()} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              <div className="summary-row">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="checkout-btn">Proceed to Checkout</button>

              <button
                onClick={() => navigate("/")}
                className="continue-shopping-btn"
              >
                Continue Shopping
              </button>
            </div>

            {/* Security Badge */}
            <div className="security-badge">
              <div className="security-icon">🔒</div>
              <div className="security-text">
                <strong>Secure checkout</strong>
                <p>256-bit SSL encryption</p>
              </div>
            </div>

            {/* Promo Section */}
            {subtotal < 50 && (
              <div className="promo-section">
                <h4>Free Shipping</h4>
                <p>Get free shipping on orders over $50</p>

                <div className="shipping-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${(subtotal / 50) * 100}%` }}
                    ></div>
                  </div>
                  <p className="shipping-remaining">
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
