import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    bottom: 0;
    font-family: "Roboto", sans-serif;
    color: white;
    z-index: 2;
`;

const Signature = () => {
    return <Container>Created and designed by Lucile Vacquie</Container>;
};

export default Signature;
