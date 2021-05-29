import React from "react";
import { Image, ProductName, Wrapper, LinkWrapper, Love } from "./styles";

function ProductCard({ id, imageUrl, title }) {
  return (
    <Wrapper>
      <LinkWrapper to={`/product/${id}`}>
        <Image src={imageUrl} />
        <ProductName>{title}</ProductName>
      </LinkWrapper>
      <Love />

    </Wrapper>
  );
}

export default ProductCard;
