import React from "react";
import styled from "styled-components";
import loading from '../../assets/loading.gif';


export const Loading = () => {

    return (

        <LoadingContainer>

            <LoadingIcon src={loading} alt = "Loading Icon" />
        </LoadingContainer>
    );
};


const LoadingContainer = styled.div`

position: fixed;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
top: 0;
left: 0;

`;


const LoadingIcon = styled.img`

height: 30%;

`;