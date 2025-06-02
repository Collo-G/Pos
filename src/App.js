import { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Checkout from "./components/Checkout";
import ProtectedRoute from "./components/ProtectedRoute";

import products from "./db/data";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );
  const [showAuth, setShowAuth] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("auth", "true");
    setShowAuth(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("auth");
    setCart([]);
    localStorage.removeItem("cart");
  };

  const toggleAuthView = () => setShowLogin((prev) => !prev);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const handleInputChange = (event) => setQuery(event.target.value);
  const handleChange = (event) => setSelectedCategory(event.target.value);
  const handleClick = (event) => setSelectedCategory(event.target.value);

  const filteredData = useMemo(() => {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, title }) =>
          [category, color, company].some(
            (attr) => attr.toLowerCase() === selectedCategory.toLowerCase()
          ) || title.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    return filteredProducts.map((product) => (
      <Card key={product.title} {...product} addToCart={() => addToCart(product)} />
    ));
  }, [selectedCategory, query]);

  return (
    <Router>
      <Navigation
        query={query}
        handleInputChange={handleInputChange}
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        onShowAuth={() => setShowAuth(true)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidebar handleChange={handleChange} />
              <Recommended handleClick={handleClick} />
              <Products result={filteredData} />
            </>
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              onShowAuth={() => setShowAuth(true)}
            >
              <Checkout cart={cart} setCart={setCart} />
            </ProtectedRoute>
          }
        />
      </Routes>

      {showAuth && (
        <div className="auth-modal-overlay">
          <div className="auth-modal">
            <button className="close-btn" onClick={() => setShowAuth(false)}>
              ✖
            </button>
            {showLogin ? (
              <Login onLogin={handleLogin} toggleAuthView={toggleAuthView} />
            ) : (
              <Register toggleAuthView={toggleAuthView} />
            )}
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
