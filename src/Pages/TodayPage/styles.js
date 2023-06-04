import styled from "styled-components";

export const ContainerToday = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 70px 20px;
`;

export const Title = styled.div`
  h1 {
    color: #126ba5;
    font-weight: 400;
    margin-top: 30px;
    font-size: 22px;
    line-height: 30px;
  }
  p {
    margin-bottom: 30px;
    font-size: 17px;
    line-height: 22px;
    font-weight: 400;
    color: ${(props) =>
      props.taggedlist.length === 0 ? "#666666" : "#8FC549"};
  }
`;

export const ListToday = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;