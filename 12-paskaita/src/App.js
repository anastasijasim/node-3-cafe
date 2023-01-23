import Button from "./components/Button/Button"
import{useState} from "react";
import CustomButton from "./components/CustomButton/CustomButton";
import Greeting from "./components/Greeting";
// import {sumOfArray} from "./utils/array";
// import Product from ".components/Product/Product";
//React hook - UseState - storing information and setting information



const App = () =>{
  // const name = "Anastasija";
  // const {onClick, name, color} = props;
  // const array = [1,2];
  // const first = array [0];
  // const second = array [1];
  // const [first,second]=array
  const [name,setName] = useState("Anastasija");
  const [age, setAge] =useState (24);
  const [count, setCount] = useState (0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const fruits = ["Banana", "Pineapple", "Apple"];

  const buttons = [
    {
      variant: "text",
      text: "Help me to get random number",
    },
    {
      variant:"outlined",
      text:"I am an outcast",
    },
    {
      variant:"contained",
      text:"Contained container",
    },
];
  

  // const numbers = [10,20];
  // const sum = sumOfArray;

  const handleAddCount = () =>{
    setCount(count+1);
  }

  return (
    <div>
      <Button onClick = {() => alert ("Sveiki, kaip jums sekasi")}>
        Say hello
      </Button>
      <Button onClick={()=> alert("Aciu, geros dienos!")}>
        Say good bye
      </Button>
      <Button onClick={()=> console.log("I am clicked")}>
        Do not click her 
      </Button>
      <Button 
        backgroundColor="green"
        onClick={()=>{
          setAge(age*2)
        }}>
        Help my age is :{age}
      </Button>
      <Button backgroundColor="red"
        onClick={()=>{
          setName("Likami");
        }}>
        {name}
      </Button>
      <Button onClick={handleAddCount}>Plus one</Button>
      <span style={{fontSize:20, color: "blue", margin: "0 10px"}}>{count}</span>
      <Button onClick={()=> setCount(count - 1)} backgroundColor="black">Minus one</Button>
      <span style={{marginLeft:8, color:"red"}}>
        {count < 0 && "Negalima pasirinkti mažiau nei 0 prekių"}
        {count > 9 &&"Jūs pasirinkote per didelį kiekį priekių"}
      </span>
      {/* <Product/> */}
      <br/>
        <div style=
        {{display:"flex",
        justifyContent: "center",
        padding:"50px",
        gap: 10 }}>
          <CustomButton variant="text">Text</CustomButton>
          <CustomButton variant="contained">Contained</CustomButton>
          <CustomButton variant="outlined">Outlined</CustomButton>
        </div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {isLoggedIn ?(
          <button onClick={()=>setIsLoggedIn(false)}>Log out</button>
        ):(
          <button onClick={()=>setIsLoggedIn(true)}>Log in</button>
        )}
        <br/>
        {["Zalia", "Geltona", "Raudona"].map((text) => (
          <CustomButton key={text}>{text}</CustomButton>
        ))}

        <ul>
          {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>))}
        </ul>
        {buttons.map((button, index)=>(
        <CustomButton key={index} variant={button.variant}>{button.text}</CustomButton>))}
    </div>
  );
};

// {isLoggedIn? <button>Log out</button> : <button onClick={() => setIsLoggedIn(true)}>Log in</button>}


export default App;

//https://mui.com/material-ui/customization/color/ - color 
