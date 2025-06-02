import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Navigation({
  query,
  handleInputChange,
  cart,
  onRemoveFromCart,
  isAuthenticated,
  onLogout,
  onShowAuth
}) {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + parseFloat(item.newPrice),
    0
  ).toFixed(2);

  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search"
          value={query}
          onChange={handleInputChange}
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>

        <div className="cart-container">
          <a href="#" onClick={toggleCart}>
            <TiShoppingCart className="nav-icons cart-icon" />
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </a>

          {showCart && (
            <div className="cart-dropdown">
              <h3>Shopping Cart</h3>
              {cart.length > 0 ? (
                <>
                  {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                      <img src={item.img} alt={item.title} width="40" />
                      <p>{item.title} - {item.newPrice}</p>
                      <MdDelete
                        className="delete-icon"
                        onClick={() => onRemoveFromCart(index)}
                      />
                    </div>
                  ))}

                  <div className="cart-total">
                    <strong>Total:</strong> ${totalPrice}
                  </div>

                  <div className="checkout-section" style={{ marginTop: "10px" }}>
                    <button
                      className="checkout-button"
                      onClick={() => navigate("/payment")}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              ) : (
                <p className="empty-cart">Cart is empty</p>
              )}
            </div>
          )}
        </div>

        {/* Auth Button */}
        {isAuthenticated ? (
          <button className="auth-btn" onClick={onLogout}>
            Logout
          </button>
        ) : (
          <button className="auth-btn" onClick={onShowAuth}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
