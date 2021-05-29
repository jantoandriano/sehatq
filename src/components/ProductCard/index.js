import React from "react";
import { useDispatch } from "react-redux";
import { Image, ProductName, Wrapper, LinkWrapper, Love } from "./styles";
import { addWishList } from "../../features/productSlice";

function ProductCard({ id, imageUrl, title }) {
  
  const dispatch = useDispatch()

  const handleAddWishList = () => {
    dispatch(addWishList(id))
  }

  return (
    <Wrapper>
      <LinkWrapper to={`/product/${id}`}>
        <Image src={imageUrl} />
        <ProductName>{title}</ProductName>
      </LinkWrapper>
      <Love onClick={handleAddWishList} />

    </Wrapper>
  );
}

export default ProductCard;
