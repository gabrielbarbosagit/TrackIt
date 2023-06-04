import styled from "styled-components";

export const ContainerHabitCreation = styled.div`
  display: ${(props) => props.displayMode};
  flex-direction: column;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 30px;
  background-color: #ffffff;
  border-radius: 5px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  font-size: 20px;
  width: 100%;
  height: 45px;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  ::placeholder {
    color: #dbdbdb;
  }
  :disabled {
    background-color: #f2f2f2;
    opacity: 0.7;
  }
`;

export const DaysWeek = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const ButtonDay = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-size: 20px;
  background: ${(props) => (!props.selected ? "#ffffff" : "#cfcfcf")};
  border: 1px solid ${(props) => (!props.selected ? "#d5d5d5" : "#cfcfcf")};
  color: ${(props) => (!props.selected ? "#dbdbdb" : "#ffffff")};
  :disabled {
    opacity: 0.7;
  }
`;

export const ContainerButtons = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
`;


