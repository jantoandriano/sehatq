import React from "react";
import { Image, ProductName, Wrapper, LinkWrapper } from "./styles";

function ProductCard({ id }) {
  return (
    <Wrapper>
      <LinkWrapper to={`/product/${1}`}>
        <Image />
        <ProductName>Product Name</ProductName>
      </LinkWrapper>
    </Wrapper>
  );
}

export default ProductCard;
