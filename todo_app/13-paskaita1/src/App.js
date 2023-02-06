import MenuList from "./components/MenuList";
import MoodChecker from "./components/MoodChecker";

const App = () =>{
  return (
    <div> 
      <MoodChecker/>
      <MenuList customerType="single" />
    </div>
  );
};

export default App;
