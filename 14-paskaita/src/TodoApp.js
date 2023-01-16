import {useState} from "react";
import "./App.css"


const mockTodos = [
  {id: 1,title: 'Learn how to delete'}, 
  {id: 2, title: "Learn how to use inputs"}
];

const TodoApp = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [todoText, setTodoText] = useState("");

  const handleDeleteTodo = (id) =>{
    //1 budas
    // console.log (id);
    // const newTodos = todos.filter(todo => todo.id !== id); //istrina reiksme is array
    // setTodos (newTodos);

    //2 budas
    setTodos ((prevTodos)=> prevTodos.filter((todo)=> todo.id !==id));
  }

  const handleChange = (event) =>{
    //event.target.value yra tekstas
    const value = event.target.value; 
    console.log (event.target.value);
    setTodoText(value);
  };

  // const a = [1,2,3];
  // const b =[4,5,6];
  // //[1,2,3,4,5,6]
  // const c = [...a,...b] //stray array //spread operatoriuis
  
  // const a = [1, 2, 3];
  // const b = [4, 5, 6];
  // const c = [...a, ...b]; // [1,2,3,4,5,6]

  // const q = { name: "Rokas" };
  // const w = { surname: "Andreikenas" };
  // const z = { ...q, ...w }; // {name: "Rokas", surname: "Andreikenas"}


  const handleAddTodo = () => {
    const title = todoText.trim();
    const alreadyExist = todos.some ((todo)=> todo.title === title);

    if (todoText && !alreadyExist){
    const newTodo = {id: Date.now(), title}
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodoText("");
    }
  };

  return (
    <div className="todo-app">
      <h1 className="todo-title">Todo list</h1>
      <ul>
        {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}{" "}
          <strong 
            className="delete-button"
            onClick={() => handleDeleteTodo(todo.id)}>
          X
          </strong>
        </li>
        ))}
      </ul>
      <input type="text" value={todoText} onChange={handleChange}/>
      <button onClick={handleAddTodo}>Add</button>
      <p>{todoText}</p>
    </div>
  )
}

export default TodoApp