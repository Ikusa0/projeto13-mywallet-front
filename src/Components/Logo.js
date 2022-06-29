import styled from "styled-components";

export default function Logo() {
  return <Container>MyWallet</Container>;
}

const Container = styled.h1`
  font-family: "Saira Stencil One", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  color: white;
  margin-bottom: 24px;
`;
