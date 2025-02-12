import Navigaton from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

//Database
import products from "./db/data"

function App() {
  const[selectedCategory, setSelectedCategory] = useState(null);

  //Input Filter
  const [query, setQuery] = useState("")
  const handleInputChange = event => {
    setQuery(event.target.value)
  }
  const filteredItems = products.filter(product=> product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!== -1));

  // Radio Filter
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }
  // Buttons Filter
   const handleClick = event=> {
    setSelectedCategory(event.target.value)
   }
   function filteredData(products, seleted, query){
    let filteredProducts = products

    // Filtering Input Items
    if (query){
      filteredProducts = filteredItems
    }
    //Selected Filter
    
   }


  return(
  <> 
  <Sidebar/>
  <Navigaton/>
  <Recommended/>
  <Products/>
  </>
  );
}

export default App;
