import Buttons from "../components/Buttons";
import "./Recommended.css";

function Recommended({handleClick}) {
  return(<>
  <div>
    <h2 className=" recommended-title">Recommended</h2>
    <div className="recommended-btns">
    <Buttons onClickHandler={handleClick} value="" title="All Products"/>
      <Buttons onClickHandler={handleClick} value="Nike" title="Nike"/>
      <Buttons onClickHandler={handleClick} value="Addidas" title="Addidas"/>
      <Buttons onClickHandler={handleClick} value="Canvas" title="Canvas"/>
      <Buttons onClickHandler={handleClick} value="New Balance" title="New Balance"/>
      <Buttons onClickHandler={handleClick} value="Yeezy" title="Yeezy"/>
    </div>
  </div>
  </>
  );
}

export default Recommended;