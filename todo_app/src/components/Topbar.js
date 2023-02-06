import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom";
import { ThemeContext } from '../contexts/ThemeContext';
import { FaMoon, FaSun} from "react-icons/fa";


const Topbar = () => {
    const navigate = useNavigate();
    const {darkMode, toggleDarkMode} = useContext(ThemeContext);
    console.log (darkMode)
  return (
    <div 
    style={{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems:'center',
        padding:"0 40px",
        backgroundColor:"yellowgreen"
        }}
        >
    <h2>My logo</h2>
    <nav style={{display:"flex", alignItems:"center", gap:30}}>
        <div onClick={()=> navigate("/home")}>Home</div>
        <div onClick={()=> navigate("/contacts")}>Kontaktai</div>
       
          {darkMode? ( 
          <FaSun onClick={toggleDarkMode}/>
          ): (
          <FaMoon onClick={toggleDarkMode}/>
          )} 
    </nav>
    
    </div>
  )
}

export default Topbar 

{/* <div onClick={toggleDarkMode}>
  {darkMode? <FaSun/>: <FaMoon />} 
</div> */}