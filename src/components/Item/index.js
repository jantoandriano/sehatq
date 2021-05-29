import React from "react";
import { Wrapper, Image, Body, Title, Price } from "./styles";

function Item() {
  return (
    <Wrapper>
      <Image />
      <Body>
        <Title>Baju</Title>
        <Price>150000</Price>
      </Body>
    </Wrapper>
  );
}

export default Item;
