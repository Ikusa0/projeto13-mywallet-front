import styled from "styled-components";
import loadingButton from "../Assets/Images/loading_button.svg";

export default function FormButton({ disabled, children }) {
  return (
    <Container disabled={disabled} type="submit">
      {disabled ? <img src={loadingButton} alt="loading" /> : children}
    </Container>
  );
}

const Container = styled.button`
  width: 100%;
  height: 46px;
  background-color: var(--secondary);
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: white;
  border: none;
  border-radius: 5px;
  &:focus-visible,
  &:hover {
    outline: none;
    filter: brightness(1.1);
  }
  &:disabled {
    opacity: 70%;
    cursor: initial;
  }
  img {
    object-fit: cover;
    height: 100%;
  }
`;
