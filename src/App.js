
import Dropdown from "./Dropdown";

import './index.css'

function App() {
  // pasing below array as props to Dropdown Component
  const dropdownitems=['Yes','Probably No']
  return (
    <div className="container">

      <h1 className="headText">Should You Use DropDown??</h1>

              <Dropdown items={dropdownitems}/>
    </div>
    

    
    

  );
}

export default App;
