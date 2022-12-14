require('dotenv').config();
const express = require('express');
const cors = require("cors");
const app =express();
const port = process.env.PORT || 8080;
// Jeigu neimportavo env failo 
// 1. patikrinti kintamuju pavadinimus 
// 2. modulio importavima ir config paleidima
// 3. .env failas turi buti root folderyje prie package.json
//dotenv - это полезный инстумент для проверки .env файлов на ошибки
app.use(cors());
app.use(express.json());

const cars = [
    {
        id:1,
        make:"BMW",
        model:"530",
        color: "Black",
    },
    {
        id:2,
        make:"Audi",
        model:"A6",
        color: "white",
    },
]

app.get ("/cars", (req, res)=>{
    res.send(cars);
});

app.get("/cars/:id", (req, res) => {//id params, kad konkretuoti kiekviena atveji
  const id = +req.params.id;
  const car = cars.find((car) => car.id === id);
  // const name = "Rokas";
  // const nameObj = ["Bmw","Audi"};
  // console.log (`my name is ${name}`);//my name is ROKAS
  // console.log (`my name is ${nameObj.name}`); //my name is ROkas

  if (car) {
    res.send(car);
  } else {
    res.status(404).send({
      error: "Car Not found",
    });

  // if(!car){
  //   return res.status (404).send ("Car doesnt exist");
  // }else{
  //   res.send(car)
  // }
  
  // car? res.send(car) : res.status(404).send ("Car doesnt exist"); 
}
});

// atsiuncia {make, model, color}
// gauna {id, make, model, color}
app.post("/cars", (req, res) => {
  const car = req.body;
  if (car.make && car.model && car.color) {
    const newCar = { ...car, id: Date.now() };//это три точки перед именем переменной (или константы), внутри определения объекта. Он раскладывает соответствующий объект внутри нового объекта. С его помощью можно получить только копию, он не может изменять существующие объекты.
    //const newCar - {...car, id: cars.length +1};
    cars.push(newCar);
    res.send(newCar);
  } else {
    res.status(400).send({
      error: "Invalid request",
    });
  }
});

  //{make,model,color}
  //gauna {id, make, model,color}


app.post ("/cars", (req,res)=>{
    const car = req.body;
    console.log (car);
})

app.listen(port, ()=>{
    console.log (`Server is running on the ${port}`)
})
