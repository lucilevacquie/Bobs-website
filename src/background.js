import React from "react"
import styled from "styled-components"
import Parallax from "./parallax"

const Container = styled.div`
    height: 2000px;
    width: 100%;
`;

const Background = () => {
    return(
        <Container>
            <Parallax/>
        </Container>
    )
}

export default Background;