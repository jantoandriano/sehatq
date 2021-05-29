import React from "react";
import { Wrapper, Image, Body, Title, Price, LinkWrapper } from "./styles";

function Item({ id, title, price, imageUrl }) {
  return (
    <Wrapper>
      <LinkWrapper to={`product/${id}`}>
        <Image src={imageUrl} />
      </LinkWrapper>
      <Body>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </Body>
    </Wrapper>
  );
}

export default Item;
