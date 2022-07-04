import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Page from "../Layouts/Page";
import { useUserContext } from "../Contexts/UserContext";

export default function NewRegistryProfit() {
  const UserContext = useUserContext();
  const navigate = useNavigate();
  const [user, setUser] = [UserContext.user, UserContext.setUser];
  const URL = "http://localhost:5000/receipt";
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const promise = axios.get(URL, { headers: { email: user.email } });
    promise.then((res) => setData(res));
  }, []);
  const receipt = data ? data.data.receipt : null;
  const registries = data ? data.data.registries : null;

  function logoff() {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  }

  return (
    <Container>
      <Page>
        <div className="header">
          <h1>Nova entrada</h1>
          <RiLogoutBoxRLine className="icon" onClick={logoff} />
        </div>
        <div className="p-relative">
          <RegistryContainer>
            {registries
              ? registries.map((registry, index) => (
                  <li key={index}>
                    <div>
                      <span className="date">{registry.date}</span>
                      <span className="title">{registry.title}</span>
                    </div>
                    <span className={(registry.value < 0 ? "red" : "green") + " price"}>{registry.value}</span>
                  </li>
                ))
              : ""}
            <div className="receipt-container">
              <span className="title">SALDO</span>
              {receipt ? (
                <span className={(receipt < 0 ? "red" : "green") + " value"}>{receipt}</span>
              ) : (
                <span className="green value">0</span>
              )}
            </div>
          </RegistryContainer>
        </div>
        <div className="button-container">
          <Link to="/profit">
            <NewRegistryButton>
              <IoAddCircleOutline className="icon" />
              <span>Nova Entrada</span>
            </NewRegistryButton>
          </Link>
          <Link to="/spent">
            <NewRegistryButton>
              <IoRemoveCircleOutline className="icon" />
              <span>Nova Saída</span>
            </NewRegistryButton>
          </Link>
        </div>
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

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .header h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
  }

  .icon {
    font-size: 30px;
  }

  .button-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .p-relative {
    position: relative;
    width: 100%;
  }

  .red {
    color: var(--red) !important;
  }

  .green {
    color: var(--green) !important;
  }
`;

const RegistryContainer = styled.ul`
  width: 100%;
  height: 446px;

  background: white;
  border-radius: 5px;
  padding: 25px 15px 50px 15px;
  box-sizing: border-box;
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  overflow: auto;

  li {
    display: flex;
    justify-content: space-between;
  }

  li div {
    display: flex;
    gap: 10px;
  }

  li .date {
    color: var(--gray);
  }
  li .title {
    color: black;
  }
  li .price {
    color: var(--green);
  }
  .receipt-container {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 15px;
    left: 0;
    color: black;
    background-color: white;
    width: 100%;

    border-radius: 5px;

    box-sizing: border-box;
    padding: 10px 15px;
  }
`;

const NewRegistryButton = styled.button`
  width: 145px;
  height: 114px;
  background-color: var(--secondary);
  border-radius: 5px;
  border: none;
  color: white;

  padding: 10px;
  box-sizing: border-box;

  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
