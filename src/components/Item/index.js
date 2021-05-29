import React from "react";
import { Wrapper, Image, Body, Title, Price, LinkWrapper } from "./styles";

function Item({ id, title, price, imageUrl }) {
  return (
    <LinkWrapper to={`product/${id}`}>
      <Wrapper>
        <Image src={imageUrl} />
        <Body>
          <Title>{title}</Title>
          <Price>{price}</Price>
        </Body>
      </Wrapper>
    </LinkWrapper>
  );
}

export default Item;
