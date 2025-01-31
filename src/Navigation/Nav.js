import { FiHeart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import "./Nav.css";

function Navigation() {
  return( 
    <nav>
      <div className="nav-container">
        <input 
        type="text"
        className="search-input" 
        placeholder="Enter your search"
        />
      </div>
        <div className="profile-container">
          <a href="#">
            <FiHeart className="nav-icons" />
          </a>
          <a href="#">
            <TiShoppingCart className="nav-icons" />
          </a>
          <a href="#">
            <AiOutlineUser className="nav-icons" />
          </a>
        </div>

      
    </nav>
    );
  
}

export default Navigation;
