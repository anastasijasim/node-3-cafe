import styled from 'styled-components';

const CustomButton = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    background-color: white;
`;

export default CustomButton;



// import React, {Children, useState} from 'react';

// export const CustomButton = ({children}) =>{
//     const darkmode = true;
//     return (
//         <CustomButton darkmode={darkmode}>{children}</CustomButton>
//     )
// }
