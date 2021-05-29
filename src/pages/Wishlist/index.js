import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Back, Header } from "./styles";
import { Container } from "../styles";
import arrow from "../../assets/arrow_back.svg";
import Item from "../../components/Item";

function Wishlist() {
  const history = useHistory();

  const wishListProducts = useSelector(
    (state) => state.products.wishListProducts
  );

  const handleBack = () => {
    history.push("/beranda");
  };

  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Back src={arrow} onClick={handleBack} />
        <Header>Wishlist</Header>
      </div>
      {wishListProducts.map((val) => (
        <Item key={val.id} {...val} />
      ))}
    </Container>
  );
}

export default Wishlist;
