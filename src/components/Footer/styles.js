import styled from "styled-components";


export const ContainerFooter = styled.div`

background-color: #ffffff;
width: 100vw;
height: 70px;
box-shadow: 0px 4px 4px rgba(0 , 0 , 0 , 0.15);
position: fixed;
bottom: 0;
left: 0;
display: flex;
justify-content: space-between;
align-items: center;
text-decoration: none;



a {


    padding: 20px;
    font-weight: 400;
    font-size: 18px;
    color: #52b6ff;
    text-decoration: none;
    cursor: pointer;
}

`;


export const CustomCircularProgress = styled.div` 

width: 120px;
height: 120px;
position: relative;
margin-bottom: 100px;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;



h4{


    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Lexend Deca;
    font-weight: 400;
    height: 65%;
    width: 100%;
    border-radius: 50%;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0;
    z-index: 2;
    color: #ffffff;
    font-size: 20px;
    line-height: 18px;


}

`;