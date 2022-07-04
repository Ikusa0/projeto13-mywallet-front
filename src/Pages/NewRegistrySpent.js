import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Form from "../Components/Form";
import Page from "../Layouts/Page";
import { useUserContext } from "../Contexts/UserContext";

export default function NewRegistrySpent() {
  const UserContext = useUserContext();
  const navigate = useNavigate();
  const URL = "http://localhost:5000/receipt";
  const [value, setValue] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);

    const data = {
      value: -Number(value),
      title: description,
    };

    const promise = axios.post(URL, data, { headers: { email: UserContext.user.email } });
    promise.then(() => {
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
        //TODO: Formatar e.target.value para o padrão R$00,00
        onChange: (e) => {
          setValue(e.target.value);
        },
        value,
        placeholder: "Valor",
        required: true,
        type: "text",
        disabled,
      },
      {
        onChange: (e) => {
          setDescription(e.target.value);
        },
        value: description,
        placeholder: "Descrição",
        required: true,
        type: "text",
        disabled,
      },
    ],
    button: {
      text: "Salvar saída",
      disabled,
    },
  };

  return (
    <Container>
      <Page>
        <h1>Nova saída</h1>
        <Form data={formData} />
      </Page>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 35px 0 35px;
  align-items: center;
  box-sizing: border-box;
  text-align: center;

  a {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
  }

  h1 {
    align-self: start;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    margin-bottom: 40px;
  }
`;
