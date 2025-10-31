import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("cornerHub_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const signup = (email, password, firstName, lastName) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const existingUsers = JSON.parse(
          localStorage.getItem("cornerHub_users") || "[]"
        );
        const userExists = existingUsers.find((u) => u.email === email);

        if (userExists) {
          reject(new Error("User already exists with this email"));
          return;
        }

        const newUser = {
          id: Date.now(),
          email,
          firstName,
          lastName,
          createdAt: new Date().toISOString(),
        };

        const updatedUsers = [...existingUsers, { ...newUser, password }];
        localStorage.setItem("cornerHub_users", JSON.stringify(updatedUsers));
        setUser(newUser);
        localStorage.setItem("cornerHub_user", JSON.stringify(newUser));
        resolve(newUser);
      }, 1000);
    });
  };

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(
          localStorage.getItem("cornerHub_users") || "[]"
        );
        const userFound = users.find(
          (u) => u.email === email && u.password === password
        );

        if (userFound) {
          const { password, ...userWithoutPassword } = userFound;
          setUser(userWithoutPassword);
          localStorage.setItem(
            "cornerHub_user",
            JSON.stringify(userWithoutPassword)
          );
          resolve(userWithoutPassword);
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("cornerHub_user");
  };

  const value = {
    user,
    signup,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
