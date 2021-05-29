import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { Back, Header } from "./styles";
import { Container, HStack } from "../styles";
import arrow from "../../assets/arrow_back.svg";
import Item from "../../components/Item";

function PurchasedHistory() {
  const history = useHistory();
  const purchasedItem = useSelector(
    (state) => state.products.purchasedProducts
  );

  const handleBack = () => {
    history.push("/beranda");
  };

  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Back src={arrow} onClick={handleBack} />
        <Header>Purchase History</Header>
      </div>
      {purchasedItem.length ? (
        purchasedItem.map((val) => (
          <HStack>
            <Item {...val} />
          </HStack>
        ))
      ) : (
        <> </>
      )}
    </Container>
  );
}

export default PurchasedHistory;
