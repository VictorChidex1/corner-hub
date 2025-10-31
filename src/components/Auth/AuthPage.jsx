Authpage;
import { useState } from "react";
import Login from "../../components/Auth/Login";
import Signup from "../../components/Auth/Signup";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      {/* Left Side - Branding */}
      <div className="auth-branding">
        <div className="branding-content">
          <h1>🛍️ Corner Hub</h1>
          <p>Your ultimate fashion destination</p>
          <div className="feature-list">
            <div className="feature">
              <span>✓</span>
              Fast & Secure Checkout
            </div>
            <div className="feature">
              <span>✓</span>
              Order Tracking
            </div>
            <div className="feature">
              <span>✓</span>
              Exclusive Member Deals
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="auth-forms">
        {isLogin ? (
          <Login onSwitchToSignup={() => setIsLogin(false)} />
        ) : (
          <Signup onSwitchToLogin={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
