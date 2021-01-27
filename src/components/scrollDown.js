import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
`;

const Text = styled.div`
    top: 40px;
    z-index: 2;

    p {
        color: white;
        font-family: "Pixeboy";
        margin: 0;
        font-size: 40px;
    }
`;

const Arrow = styled.i`
    border: solid white;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
`;

const ScrollDown = () => {
    return (
        <Container>
            <Text>
                <p>Scroll</p>
                <Arrow className="arrow down"></Arrow>
            </Text>
        </Container>
    );
};

export default ScrollDown;
