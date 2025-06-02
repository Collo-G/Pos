import Input from "../../components/Input";
import "./Price.css";

 function Price({handleChange}) {
  return(
  <div className="ml">
    <h2 className="sidebar-title price-title">Price</h2>
    <label className = "sidebar-label-container">
       <input onChange = {handleChange} type="radio" value="" name="test2" /> 
       <span className= "checkmark"></span>All
      </label>
      <Input
      handleChange={handleChange}
      value={500}
      title="Ksh500 - Ksh1000"
      name="test2"
      />
       <Input
      handleChange={handleChange}
      value={1000}
      title="Ksh1000 - Ksh5000"
      name="test2"
      />
       <Input
      handleChange={handleChange}
      value={5500}
      title=" Ksh5000- Ksh10000"
      name="test2"
      />

  </div>
  );
}

export default Price;