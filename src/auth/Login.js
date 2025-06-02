import { useState } from "react";
import "./Auth.css";

const Login = ({ onLogin, toggleAuthView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost/auth_backend/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.message === "Login successful") {
      localStorage.setItem("isAuthenticated", "true");
      onLogin();
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <img 
          src="https://www.isteducation.com/wp-content/uploads/2022/02/cropped-IST-logo-01-2048x2048-1-2.png" 
          alt="IST Logo" 
          className="auth-logo" 
        />
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <button onClick={toggleAuthView}>Register</button></p>
      </div>
    </div>
  );
};

export default Login;
