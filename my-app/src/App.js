import logo from './logo.svg';
import './App.css';
import Logo from "./componentns/Logo";
import NavigationBar from "./componentns/NavigationBar";
import FuncButton from "./componentns/FuncButton";
import FuncDiv from './componentns/FuncDiv';
import ClassButton from './componentns/ClassButton';
import ClassDiv from './componentns/ClassDiv';
import Button from './componentns/Button';
import Hero from './componentns/Hero';
//import Hero from './components/Hero/Hero';


//App.js yra pagrindinis komponentas
//vienas failas = vienas komponentas
//komponentasi rašomi didžiąją raidė
//Komponentai buna dvieju tipu: funkciniai ir klasikiniai 
//Funkciniai atrodo kaip funkcijos tik iš didziosios raides. Regular arba arrow functions 
//Return dalyje rašoms JSX - javascript + html 

//geriau perkelti visas css su savo js 
//<div className="App"> 

function App() {
  // const name = "Anastasija";

  // const getRandomNumber = () =>{
  //   return Math.floor(Math.random()*10 +1)
  // };
  return (
    <div className="App"> 
      <Logo/>
      <NavigationBar/>
      <FuncButton title= "Spausk mane" color = "green"/>
      <FuncButton title = "Nespausk mane"/>
      <FuncDiv 
      tittle ="Kažkas" 
      subtitle ="Kažkur kažkas" 
      buttonText ="Kas" 
      color="blue"/>
      <ClassButton tittle="Klasikinis mygtukas"/>
      <ClassDiv tittle ="Kažkas" subtitle ="Kažkur kažkas" buttonText ="Kas"/>
      <Button title ="Anastasija spausk cia"/>
      <Button>Anastasija Spausk cia</Button>
      <Hero title="Info hero" subtitle="Info subtitle"/>
      {/* {name}
      {getRandomNumber()} */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, my name is {name}
        </p>
        <p>I'm going to sleep tonight {getRandomNumber}</p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Google
        </a>
      </header> */}
    </div>
  );
}

export default App;
