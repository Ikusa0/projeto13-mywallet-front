import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Form from "../Components/Form";
import Logo from "../Components/Logo";
import Page from "../Layouts/Page";

export default function SingUp() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);

    // TODO: enviar dados para o back
  }

  const formData = {
    form: { onSubmit: handleSubmit },
    inputs: [
      {
        onChange: (e) => {
          setName(e.target.value);
        },
        value: name,
        placeholder: "Nome",
        required: true,
        type: "text",
        disabled,
      },
      {
        onChange: (e) => {
          setEmail(e.target.value);
        },
        value: email,
        placeholder: "E-mail",
        required: true,
        type: "email",
        disabled,
      },
      {
        onChange: (e) => {
          setPassword(e.target.value);
        },
        value: password,
        placeholder: "Senha",
        type: "password",
        required: true,
        disabled,
      },
      {
        onChange: (e) => {
          setConfirmPassword(e.target.value);
        },
        value: confirmPassword,
        placeholder: "Confirme a senha",
        type: "password",
        required: true,
        disabled,
      },
    ],
    button: {
      text: "Entrar",
      disabled,
    },
  };

  return (
    <Container>
      <Page>
        <Logo />
        <Form data={formData} />
        <Link to="/login">Já tem uma conta? Entre agora!</Link>
      </Page>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 70px 35px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;

  a {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
  }
`;
