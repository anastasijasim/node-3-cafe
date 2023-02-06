import { mainColor, mainDarkColor } from "../consts/colors";

export const getMainColor = (darkMode) =>{
    return darkMode ? mainDarkColor : mainColor;
};
