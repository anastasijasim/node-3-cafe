import React from 'react';
// import styled from "styled-components"
import { PrimaryButton } from './Button.stories';

const PrimaryButton = styled.button`
    border: none;
    border-radius: 4px;
    background-color: ${PrimaryButtonColor};
  `;

const ProductItem = styled.div`
    width: "25 %"
`

const Button = ({children}) => {
  return (
    <button>{children}</button>
  )
}

export default Button


//npx sb init
// npm run storybook 