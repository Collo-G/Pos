import "./Price.css";

 function Price() {
  return<div className="ml">
    <h2 className="sidebar-title price-title">Price</h2>
    <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>All
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>Ksh 0-500
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>Ksh500-1000
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>Over Ksh1000
      </label>

  </div>
}

export default Price;