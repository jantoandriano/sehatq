import React from "react";
import { useDispatch } from "react-redux";
import { Image, ProductName, Wrapper, LinkWrapper } from "./styles";
import { LoveOutline, LoveFill } from "../../pages/styles";
import { addWishList } from "../../features/productSlice";

function ProductCard({ id, imageUrl, title, loved }) {
  const dispatch = useDispatch();
  const handleAddWishList = () => {
    dispatch(addWishList(id));
  };

  return (
    <Wrapper>
      <LinkWrapper to={`/product/${id}`}>
        <Image src={imageUrl} />
        <ProductName>{title}</ProductName>
      </LinkWrapper>

      {!loved ? (
        <LoveOutline onClick={handleAddWishList} />
      ) : (
        <LoveFill onClick={handleAddWishList} />
      )}
    </Wrapper>
  );
}

export default ProductCard;
