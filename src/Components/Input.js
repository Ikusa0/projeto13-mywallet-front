import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 58px;
  background-color: white;
  border-radius: 5px;
  box-sizing: border-box;
  border: none;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: var(--main);
  padding: 15px;
  &::placeholder {
    color: black;
  }
  &:focus-visible {
    outline: none;
    border: 2px solid var(--secondary);
  }
  &:disabled {
    filter: brightness(0.8);
  }
  &:disabled::placeholder {
    color: var(--dark-gray-2);
  }
`;

export default Input;
