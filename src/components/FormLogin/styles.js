import styled from "styled-components";


export const Form = styled.form`

height: 150px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

input {

    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: #ffffff;
    padding: 10px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    font-weight: 400;
    font-size: 19px;
    line-height: 25px;
    color: gray;
    cursor: pointer;
    &::placeholder {
        color: #dbdbdb;
    }

    &:disabled {

        background-color: #f2f2f2;
        ::placeholder {
            color: #afafaf;
        }
    }
}

button {

    width: 303px;
    height: 45px;
    background: #52b6ff;
    border-radius: 4px;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Lexend Deca;

}

`;