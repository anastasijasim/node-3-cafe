import { useState } from "react";
import "./App.css";

const mockTodos = [
  {id: 1, title: 'Learn how to delete'}, 
  {id:2, title: "Learn how to use inputs"},
];

const TodoApp = () =>{
  const [todos,setTodos] = useState(mockTodos);
  const [todoText, setTodoText] = useState ("");

  const handleDeleteTodo = (id) => {
    console.log (id);
    //1 budas
    // const newTodos = todos.filter(todo => todo.id !==id); //istrina reiksme is array
    // setTodos((newTodos));

    //2 budas
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !==id));
  };

  const handleChange = (event) =>{
    //event.target.value yra tekstas/skaiciai ar smth
    const value = event.target.value;
    setTodoText(value);
    console.log (event.target.value);
  };

  // const a = [1,2,3];
  // const b = [4,5,6];
  // //[1,2,3,4,5,6]
  // const c = [...a, ...b]
  // //[] => [1,2,3,4,5,6]

  // const q = {name:"Rokas"};
  // const w = {surname: "Andreikanas"};
  // const z = {...q,...w};
  // //{name:"Rokas", surname:"Andreikanas"}


  const handleAddTodo = () =>{
    const title = todoText.trim (); //kad butu be tarpu 
    const alreadyExists = todos.some((todo) => todo.title === title);
    if(title && !alreadyExists) { //ir 
      const newTodo = {id: Date.now(), title};
      //[{...},{...}, {}]
      // todos.push(newTodo)
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTodoText("");
    }
  };

  return(
    <div className="todo-app">
      <h2 className="todo-title">Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{" "}
            <strong className="delete-button" 
            onClick={() => handleDeleteTodo (todo.id)}
            >X
            </strong>
          </li>
        ))}
      </ul> 
      <input type="text" value={todoText} onChange={handleChange}/>
      <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}

export default TodoApp


//  {/* <Routes>
//         <Route path="/shopping" element ={<ShopingListApp/>}/>
//         <Route path="/todo" element ={<TodoApp/>}/>
//         <Route path="/homepage" element ={<HomePage/>}/>
//         <Route path="/contacts" element ={<ContactsPage/>}/>
//         {/* <Route path="/cars/:id"/> */}
//       </Routes> */}


// import TodoApp from "./TodoApp";
// import ShopingListApp from "./ShoppingListApp";
// import {Routes, Route} from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import ContactsPage from "./pages/ContactsPage";