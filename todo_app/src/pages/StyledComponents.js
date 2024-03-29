import React from 'react';
import Button from '../components/Button';
import Topbar from '../components/Topbar';
import CustomButton from '../components/CustomButton';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import CustomInput from '../components/CustomInput';

const Container = styled.div`
padding:40px;
display:flex; 
`;

const TomatoButton = styled(CustomButton)`
    color: tomato;
    border-color: tomato;
`

const StyledComponents = () => {

    //size: 'sm' | 'lg' |'xl'
    const props ={size: "sm", inputColor: "rebeccapurple"};


  return (
    <div>
        <Topbar/>
        <Container>
            <Button/>
        </Container> 
        <Container>
            <CustomButton as={Link} to="/home">Mano button</CustomButton>
            <TomatoButton as="a" href="https://www.google.com/">Mano tomato</TomatoButton>
        </Container>
        <Container>
            <CustomInput defaultValue = "Anastasija"/>
            <CustomInput defaultValue = "Anastasija" inputColor = "red" size="lg"/>
            <CustomInput 
            defaultValue = "Anastasija" 
            inputColor = {props.inputColor}
            size={props.size}
            />
        </Container>
    </div>
  )
}

export default StyledComponents