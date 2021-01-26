import React from "react"
import styled from "styled-components"

const Container = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    bottom: 0;
    font-family: 'Roboto', sans-serif;
    color: #46C4EC;
`;

const MyName = styled.div`
`;

const Signature = () => {
    return (
        <div>
            <Container>
                <MyName>Created and design by Lucile Vacquie</MyName>
            </Container>
        </div>
    )
}

export default Signature;