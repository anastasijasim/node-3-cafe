require('dotenv').config();
const express = require ('express');
const cors = require ('cors');
const app =express();
const db = require('./db');

const users = db.data;
const port = process.env.PORT || 8080

app.use (cors());
app.use (express.json());

app.get('/users',(req,res)=>{
    res.send(db.data);
})

const capitalized =(word)=>{
    return word.charAt(0).toUpperCase()+word.slice(1)
}


app.get('/users/:car',(req,res)=>{
    const car = req.params.car;
    const userCars = users.filter (user => user.car === capitalized(car));
    if (userCars) {
        res.send(userCars);
      } else {
        res.status(404).send({
          error: "Car Not found",
        });
    }
})

app.get ('/users/id/:id', (req,res) =>{
    const id = +req.params.id;
    const usersID = users.find((i)=> i.id === id);

    if (usersID){
        res.send (usersID)
    }else {
        res.status(404).send({
            error: "ID not found",
        });
    }
})




app.listen (port, () =>{
    console.log (`Service is running on the ${port} port`);
})


