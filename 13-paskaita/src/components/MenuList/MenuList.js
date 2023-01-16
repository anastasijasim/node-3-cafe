import {singleMenu, coupleMenu, familyMenu} from "./const";

const MenuList = ({customerType}) =>{
    const getCustomerMenu = (type) =>{
        if(type === "single"){
            return singleMenu
        }else if (type === "couple"){
            return coupleMenu 
        }else{
            return familyMenu;
        }
    }

    const CustomerMenu = getCustomerMenu(customerType);

    return <ol>
        {customerMenu.map(menuItem => <li key={menuItem.itemName}>
            {menuItem.itemName} <stro</li>)}
    </ol>
};

export default MenuList;