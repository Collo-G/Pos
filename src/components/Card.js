import { BsBagHeartFill } from "react-icons/bs";

function Card({ img, title, star, reviews, newPrice, prevPrice, addToCart }) {
  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star} {star} {star} {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag">
            <BsBagHeartFill className="bag-icon" onClick={addToCart} />
          </div>
        </section>
        {/*  Add to Cart Button */}
        <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
      </div>
    </section>
  );
}

export default Card;
