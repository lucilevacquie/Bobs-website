import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    bottom: 10px;
    font-family: "Roboto", sans-serif;
    color: white;
    z-index: 2;
    text-shadow: 0px 0px 6px black;
`;

const Link = styled.a`
    text-decoration: none;
    color: white;
    font-weight: bold;
`;
//comment
const Signature = () => {
    return (
        <Container>
            Created and designed by
            <Link
                href="https://www.linkedin.com/in/lucile-vacqui%C3%A929/"
                target="_blank"
            >
                &nbsp;Lucile Vacquie
            </Link>
        </Container>
    );
};

export default Signature;
