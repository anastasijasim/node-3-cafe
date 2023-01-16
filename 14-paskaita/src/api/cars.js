const cars = [
    {id:1 , title:"BMW", subtitle:"Very good car", years: 2000, color: "black"},
    {id:2, title:"Audi", subtitle:"Very very good car", years:2100, color:"red"},
];

export const getCars =() =>{
    return cars;
};

export const getCar = (id) =>{
    return cars.find((car)=> car.id === id);
};

getCar(1)//{id:1 , title:"BMW", subtitle:"Very good car"}
