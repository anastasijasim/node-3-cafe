import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Button from './components/Button';



function App() {
    return(
      <div className='App'>
        <img className = "Hero-Background"src="https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=1380&t=st=1672859641~exp=1672860241~hmac=bfa351fe9aa78ecc82b878422c7cff45136a3749cfecd65341a2fe71fd50a65b" alt = "mainPicture" width="1535px" height="400px"></img>
        <Hero title ="Title" subtitle ="Some about" subtitletwo ="In two lines" />
        <Button>Button</Button>
      </div>
    )
}

export default App;
