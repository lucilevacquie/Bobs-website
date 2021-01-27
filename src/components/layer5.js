import React from "react";
import styled from "styled-components";
import Earth from "../assets/Earth.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  position: fixed;
  transform: scale(0);
  z-index: 2;
  width: 800px;
  bottom: -630px;
  @media only screen and (max-width: 1200px) {
    width: 550px;
    bottom: -530px;
  }
  @media only screen and (max-width: 1024px) {
    width: 530px;
  }
  @media only screen and (max-width: 768px) {
    bottom: -520px;
    width: 590px;
  }
  @media only screen and (max-width: 480px) {
    bottom: -350px;
    width: 370px;
  }
`;

const Layer5 = ({ myRef }) => {
  return (
    <Container>
      <Image ref={myRef} src={Earth} alt="earth" />
    </Container>
  );
};

export default Layer5;
