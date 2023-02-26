const App = () => {
  const name: string = "Anastasija";
  const surname = "Sim";
  const age: number = 26;
  const isAdult:boolean = true;
  const wife = null;
  const favoriteColor = undefined;
  const numbers: (number)[] = [1,2,3,4,5]; //sita naudosim
  const numbers1: Array<number> = [1,2,3,4,5];

  const items: (number| string)[] = [1,2, "3", "4"];
  const item: number| string = "1";

  const dog: any = {//tai kada tu visai nezinai ka naudoti 
    name:"Johny",
    age:1,
  };

  const number1= 1;
  const number2 = Number("2");

  const result: number = number1 + number2;
  console.log (result, typeof result);

  const addNumber = (num1: number, num2: number) => {
    return num1 + num2
  };

  const addedNumbers = addNumber(1, 5);

  const car:{
    make: string,
    color: string
  } = {
    make:"Volvo",
    color: ""
  };

  const response = true; 

  if(response === true){
    car.color = "red"
  }

  const car1: {
    make:string;
    model?:string
  } ={
    make: "BMW"
  };

  if(response){
    car1.model ="X5"
  };

  type PPerson = {
    name: string;
    age:number;
    email?:string;
  };

  

  interface Person{
    name:string; //required
    age: number;//required
    email?: string; //optional laukas
  }
  
  
  interface SuperHero {
    power: string;
  }

  interface SuperPerson extends SuperHero{
    name : string;

  }
  const person: Person ={
    name: "Anastasija",
    age: 26,
  };

  const person1: Person = {
    name: "Romas",
    age : 30,
    email: "romas@gmail.com"
  }

  console.log (name, surname, age, isAdult, wife, favoriteColor, numbers, numbers1, items, item, dog);



  const name1:string = "Alice";
  const name2:string = "Bob";
  const name3:string = "Zaphad";

 
const earthYears:number = 1000000

const mercury:number = earthYears*0.2408467;
const venus:number = earthYears *0.61519726;
const earthr:number = earthYears *1.0;
const mars:number = earthYears *1.8808158;
const jupiter:number = earthYears *11.862615;
const saturn:number =   earthYears *29.447498;
const uranus:number = earthYears *84.016846;
const neptune:number = earthYears *164.79132;

  // const str:string = "Portable Network Graphics";
  // const buildAcronym= (str:string =" ") =>{
  //   const strArr = str.split ('  ');
  //   let res:string = " ";
  //   strArr.map(el =>{
  //     const char = el;
  //     if(char === char.toUpperCase() && char !==char.toLocaleLowerCase()){
  //       res += char;
  //     };
  //   });
  //   return res;
  // };

  // console.log(buildAcronym(str));
  // console.log(buildAcronym('Portable Network Graphics'));

  const phrase:string = "Portable Network Graphics";

  const  getFirstLetter = (word: string): string => {
    return word.charAt(0).toUpperCase();
  }
  const parse = (phrase: string) => {
    const words: string[] = phrase.match(/[A-Z]/g)!;
    return words.map(getFirstLetter).join("");
  }

  //+[a-z]*|[a-z]+
  //https://basicweb.ru/javascript/js_string_match.php

  const getAcronym = parse(phrase);
  console.log (getAcronym);

console.log (parse(phrase));
 



  return (
    <div>
      <p>One for {name1} one for me</p>
      <p>One for {name2} one for me</p>
      <p>One for you, one for me</p>
      <p>One for {name3}, one for me</p>
      <p>Real mercury age is {mercury}</p>
      <p>Real Venus age is {venus}</p>
      <p>Real Earthr age is {earthr}</p>
      <p>Real Mars age is {mars}</p>
      <p>Real Jupiter age is {jupiter}</p>
      <p>Real Saturn age is {saturn}</p>
      <p>Real Uranus age is {uranus}</p>
      <p>Real Neptune age is {neptune}</p>
      <p>{getAcronym}</p>
    </div>
  )
}



export default App


//npx create-react-app my-app --template typescript