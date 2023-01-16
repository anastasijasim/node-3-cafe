import TodoApp from "./TodoApp";
import ShopingListApp from "./ShoppingListApp";
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";

const App = () =>{
  return(
    <div>
      <Routes>
        <Route path="/shopping" element ={<ShopingListApp/>}/>
        <Route path="/todo" element ={<TodoApp/>}/>
        <Route path="/homepage" element ={<HomePage/>}/>
        <Route path="/contacts" element ={<ContactsPage/>}/>
        {/* <Route path="/cars/:id"/> */}
      </Routes>
        
    </div>
  )
}

export default App 