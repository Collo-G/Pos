import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ isAuthenticated, onShowAuth, children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      onShowAuth();
      navigate("/");  // or navigate(-1) to stay on previous page
    }
  }, [isAuthenticated, onShowAuth, navigate]);

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
