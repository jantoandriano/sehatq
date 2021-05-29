import React from "react";
import { useHistory } from "react-router-dom";
import { Back, Header, WishlistItem } from "./styles";
import { Container } from "../styles";
import arrow from "../../assets/arrow_back.svg";
import Item from "../../components/Item";

function Wishlist() {
  const history = useHistory();

  const handleBack = () => {
    history.push("/beranda");
  };

  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Back src={arrow} onClick={handleBack} />
        <Header>Wishlist</Header>
      </div>
      <Item id={1} />
      <Item id={1} />
      <Item id={1} />
      <Item id={1} />
    </Container>
  );
}

export default Wishlist;
