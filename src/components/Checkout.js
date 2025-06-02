import { useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const totalPrice = cart
    .reduce((sum, item) => sum + parseFloat(item.newPrice), 0)
    .toFixed(2);

  const handlePaymentSuccess = (details, data) => {
    console.log("Payment successful!", details);
    setIsProcessing(true);

    const transactionData = {
      user_id: 1, // Replace with dynamic user ID if available
      cart_data: cart,
      total_amount: totalPrice,
      payment_status: "completed",
      payment_method: "PayPal",
    };

    fetch("http://localhost/auth_backend/transaction.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Transaction recorded:", data);
        setCart([]);
        localStorage.removeItem("cart");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error recording transaction:", error);
        alert("Payment completed, but failed to record transaction.");
        navigate("/");
      });
  };

  const handlePaymentError = (err) => {
    console.log("Payment failed", err);
    alert("Payment failed. Please try again.");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="cart-summary">
        <h3>Your Cart</h3>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.title} - ${item.newPrice}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty</p>
        )}
        <p>
          <strong>Total: ${totalPrice}</strong>
        </p>
      </div>

      {cart.length > 0 && (
        <PayPalScriptProvider
          options={{
            "client-id":
              "AbfhhT85djKbY6EytgAI3GV2POKU7J6mmSsjremhF9Bydrfi1rmXx1S_3TFbI-wMA_YABOvw3yedSG50",
          }}
        >
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: totalPrice,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                handlePaymentSuccess(details, data);
              });
            }}
            onError={(err) => {
              handlePaymentError(err);
            }}
          />
        </PayPalScriptProvider>
      )}

      {isProcessing && <p>Processing payment and saving transaction...</p>}
    </div>
  );
}

export default Checkout;
