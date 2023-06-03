import styled from "styled-components";

export const ContainerBoard = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 13px 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 69px;
    height: 69px;
    background: ${(props) => (props.visibilityStatus ? "#8fc549" : "#ebebeb")};
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    color: #666666;
    margin-bottom: 5px;
    font-size: 20px;
    line-height: 25px;
  }
`;

export const SequenceCurrent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    width: 100%;
    color: #666666;
    font-size: 14px;
    line-height: 1.2;
  }
  span {
    width: 100%;
    color: ${(props) => (props.status ? "#8fc549" : "#666666")};
  }
`;

export const SequenceHighest = styled.div`
  p {
    width: 100%;
    margin-top: -5px;
    color: #666666;
    font-size: 14px;
  }
  display: flex;
  flex-direction: column;
  span {
    width: 100%;
    color: ${(props) =>
      props.status && props.currentSequence === props.highestSequence
        ? "#8fc549"
        : "#666666"};
  }
`;