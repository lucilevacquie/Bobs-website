import React from "react"
import styled from "styled-components"
import Parallax from "./parallax"

const Container = styled.div`
    height: 3500px;
    width: 100%;
    background-color: #0B1464;
`;

const Background = () => {
    return(
        <Container>
            <Parallax/>
        </Container>
    )
}

export default Background;