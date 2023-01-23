import MenuList from "./componentns/MenuList/MenuList";
import MoodChecker from "./componentns/MoodChecker"
import CustomButton from "./componentns/CustomButton/CustomButton";
import {useState} from "react";

const App = () => {
  const [activeMenu, setActiveMenu] = useState ("single");

  const buttons = [
  {
    label:'Show single menu',
    value:"single ",
  },
  {
    label:'Show family menu',
    value:"family ",
  },
  {
    label:'Show couples menu',
    value:"couples",
  },
];

  return (
    <div>
      <MoodChecker/>
      <br/>
      {buttons.map(button => 
      <CustomButton 
        key={button.value}
        variant={activeMenu === button.value ? "contained": "outlined"} 
        onClick={()=>setActiveMenu (button.value)}>
        {button.label}
      </CustomButton>)}
      {/* <CustomButton variant={activeMenu === "single" ? "contained": "outlined"} onClick={()=>setActiveMenu ('single')}> 
        Show single Menu
      </CustomButton>
      <CustomButton variant={activeMenu === "family" ? "contained": "outlined"} onClick={()=>setActiveMenu ('family')}> 
        Show family Menu
      </CustomButton>
      <CustomButton variant={activeMenu === "couples" ? "contained": "outlined"} onClick={()=>setActiveMenu ('couples')}> 
        Show couples Menu
      </CustomButton> */}
      <MenuList customerType={activeMenu}/>
    </div>
  );
};

export default App