import { useState } from "react";
import Login from "../../components/Auth/Login";
import Signup from "../../components/Auth/Signup";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <div className="auth-branding">
        <div className="branding-content">
          <h1>🛍️ Corner Hub</h1>
          <p>Your Fashion Destination</p>
        </div>
      </div>

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
