const express = require('express');
const cors = require ("cors");
const app = express();//app yra express instance
const port = 3000;

app.use(cors());

    
// })

//cors funkcijos reference
//cors ()//funkcijas returnas(instance)

//req = request - duomenys kuriuos paduoda kvieciantysis pvz. POST user duomenys ar validacijos raktas
//res - response - duomenys kuriuos grazinam kai kviecia musu API keliu "/"
//pirmas argumentas - kelias i musu API "/"

const cars = ["BMW", "Porsche", "VW"];

app.get ("/", (req, res) =>{
    res.send (cars);
});

app.listen (port, () =>{
    console.log (`Service is running on the ${port} port`);
})
