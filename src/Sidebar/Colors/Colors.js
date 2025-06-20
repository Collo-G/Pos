import Input from "../../components/Input";
import "./Colors.css";

function Colors({handleChange}) {
  return (
  <div>
    <h2 className="sidebar-title color-title">Colors</h2>
    <label className = "sidebar-label-container">
       <input onChange = {handleChange} type="radio" value="" name="test3" /> 
       <span className= "checkmark all"></span>All
      </label>
      <Input
      handleChange={handleChange}
      value="black"
      title="Black"
      name="test3"
      color="black"
      />
       <Input
      handleChange={handleChange}
      value="red"
      title="Red"
      name="test3"
      color="red"
      />
       <Input
      handleChange={handleChange}
      value="grey"
      title="Grey"
      name="test3"
      color="grey"
      />
      
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test3" />
        <span className="checkmark"
        style={{background:"white", border:"1px solid black"}}></span>White
      </label>
  </div>
  ); 
}

export default Colors;