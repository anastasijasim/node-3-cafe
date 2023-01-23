import { singleMenu, coupleMenu, familyMenu } from './const'

const MenuList = ({customerType}) => {
    //single | couple | family
    const getCustomerMenu = (type) =>{
        if(type ==="single") {
            return singleMenu
        }else if (type ==="couples") {
            return coupleMenu;
        }else {
            return familyMenu;
        }
    };

    const customerMenu = getCustomerMenu (customerType);

  return  <ol>
    {customerMenu.map(menuItem =><li key= {menuItem.itemName}>
        {menuItem.itemName} <strong>${menuItem.price}</strong>
        </li>)}
    </ol>
};

export default MenuList