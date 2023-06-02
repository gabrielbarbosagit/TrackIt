import styled from "styled-components";



export const ContainerHabits = styled.div`

display: flex;
flex-direction: column;
justify-content: left;
align-items: left;
padding: 70px 20px;

p {

color: #666666;
font-size: 17px;
line-height: 22px;
font-weight: 400;

}

`;


export const TitleContainer = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
background-color: #e5e5e5;

h2 {

    color: #126ba5;
    font-weight: 400;
    margin-top: 30px;
    margin-bottom: 18px;
    font-size: 22px;
    line-height: 30px;
    
}

button {

    width: 40px;
    height: 35px;
    background-color: #52b6ff;
    border-radius: 5px;
    color: #ffffff;
    border: none;
    font-weight: 400;
    font-size: 27px;
    cursor: pointer;
}

`;



export const HabitCardContainer = styled.div`

width: 100%;
display: flex;
gap: 10px;
flex-wrap: wrap;
`;