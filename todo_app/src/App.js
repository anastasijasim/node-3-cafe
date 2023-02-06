import React from 'react';
import {Routes, Route} from "react-router-dom";
import TodoApp from './TodoApp';
import ShopingListApp from './ShoppingListApp';
import HomePage from "./pages/HomePage";
import ContactsPage from './pages/ContactsPage';
import CarPages from './pages/CarPages';
import { STYLED_COMPONENTS } from './consts/routes';
import StyledComponents from "./pages/StyledComponents";




const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/shoppinglist'element={<ShopingListApp/>}/>
      <Route path='/todo'element={<TodoApp/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='contacts' element={<ContactsPage/>}/>
      <Route path='/cars/:id' element={<CarPages/>}/>
      <Route path={STYLED_COMPONENTS} element = {<StyledComponents/>}/>
    </Routes>
    
    </div>
  )
}

export default App


//npm install react-router-dom


