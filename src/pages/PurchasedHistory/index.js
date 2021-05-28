import React from "react";
import { useHistory } from "react-router-dom";
import { Back, Header } from "./styles";
import { HStack, Container } from "../styles";
import arrow from "../../assets/arrow_back.svg";
import PurchasedResult from "../../components/PurchasedResult";

function PurchasedHistory() {
  const history = useHistory();

  const handleBack = () => {
    history.push("/beranda");
  };

  return (
    <Container>
      <div style={{ display: "flex", alignItems: 'center' }}>
        <Back src={arrow} onClick={handleBack} />
        <Header>Purchase History</Header>
      </div>
      <PurchasedResult />
      <PurchasedResult />
      <PurchasedResult />
      <PurchasedResult />
    </Container>
  );
}

export default PurchasedHistory;
