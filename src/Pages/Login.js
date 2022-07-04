import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Form from "../Components/Form";
import Logo from "../Components/Logo";
import Page from "../Layouts/Page";
import { useUserContext } from "../Contexts/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const URL = "http://localhost:5000/login";
  const UserContext = useUserContext();

  React.useEffect(() => {
    const user = UserContext.user;
    if (user) {
      navigate("/receipt");
    }
  }, [UserContext, navigate]);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);

    const data = {
      email,
      password,
    };

    const promise = axios.post(URL, data);
    promise.then((res) => {
      UserContext.setUser(res.data);
      navigate("/receipt");
    });
    promise.catch(() => {
      alert("ocorreu um erro");
      setDisabled(false);
    });
  }

  const formData = {
    form: { onSubmit: handleSubmit },
    inputs: [
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
        <Link to="/sing_up">Primeira vez? Cadastre-se!</Link>
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
