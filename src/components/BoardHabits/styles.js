import styled from "styled-components";


export const BoardContainer = styled.div`

position: relative;
width: 100%;
height: auto;
background: #ffffff;
border-radius: 5px;
margin-bottom: 10px;
padding: 15px;
display: flex;
flex-direction: column;
justify-content: space-between;

img {

    position: absolute;
    height: 20px;
    right: 10px;
    top: 10px;
    cursor: pointer;
}




h2 {

    width: 100%;
    color: #666666;
    font-size: 20px;
    margin-bottom: 10px;

}

`;


export const DayWeekContainer = styled.div`

width: 100%;
display: flex;
gap: 5px;

`;


export const Days = styled.button`

width: 30px;
height: 30px;
background: ${(props) => !props.days.includes(props.index) ? "#ffffff" : "#cfcfcf"};
border: 1px solid;

${(props) => (!props.days.includes(props.index) ? "#d5d5d5" : "#cfcfcf")};
border-radius: 5px;
color: ${(props) => !props.days.includes(props.index) ? "dbdbdb" : "#ffffff"};
font-size: 20px;


`

