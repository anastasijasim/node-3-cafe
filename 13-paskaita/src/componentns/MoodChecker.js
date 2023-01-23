import {useState} from 'react';


const MoodChecker = () =>{
    const [message, setMessage] = useState ('Kaip jauciautes?');

    const buttons = [
        {label:"Jauciuosi prastai", value:"Nieko tokio, viskas bus gerai"},
        {label:"Jauciuosi normaliai", value:"Nieko tokio, viskas yra gerai"},
        {label:"Jauciauosi puikiai", value:"VALIO"},
    ];

    return (
        <div>
            <h2>{message} </h2>
            {buttons.map(button=> <button key = {button.value} onClick = {()=> setMessage (button.value)}>
                {button.label}
            </button>)}
        </div>
        
    );
};

export default MoodChecker



// <button onClick={() => setMessage ("Nieko tokio,viskas bus gerai :)")}>
//                 Jauciausi Prastai
//             </button>
//             <button onClick={()=>setMessage("Nieko tokio, viskas yra gerai")}>
//                 Jauciausi normaliai
//             </button>
//             <button onClick={() =>setMessage("Jega valio")}>
//                 Jauciausi puikiai
//             </button>