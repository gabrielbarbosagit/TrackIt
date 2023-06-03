import styled from "styled-components";


export const ButtonSave = styled.div`

width: 84px; 
height: 35px;
box-sizing: border-box;
background-color: ${(props) => props.background};
color: ${(props) => props.color};
margin-left: 20px;
display: inline-flex;
justify-content: center;
border-radius: 4px;
cursor: pointer;
font-size: 15px;
text-align: center;
position: relative;
padding: 0 10px;
border: none;
outline: none;
:disabled {
    opacity: 0.7;
}



`;