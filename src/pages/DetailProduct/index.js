import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, HStack, FlexEnd } from "../styles";
import {
  ProductImage,
  Back,
  Share,
  ProductBody,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  BuyButton,
  Love
} from "./styles";
import arrow from "../../assets/arrow_back.svg";
import share from "../../assets/share.svg";

function DetailProduct() {
  const history = useHistory();
  const { id } = useParams();
  const { imageUrl, title, description, price } = useSelector((state) =>
    state.products.productsName.find((product) => product.id === id)
  );

  const handleBack = () => {
    history.goBack();
  };

  const handleShare = () => window.alert("Product shared");

  return (
    <Container>
      <div style={{ position: "relative" }}>
        <ProductImage src={imageUrl} />
        <Back src={arrow} onClick={handleBack} />
        <Share src={share} onClick={handleShare} />
      </div>

      <ProductBody>
        <HStack>
          <ProductTitle>{title}</ProductTitle>
          <Love />
        </HStack>
        <ProductDesc>{description}</ProductDesc>
      </ProductBody>

      <FlexEnd>
        <ProductPrice>{price}</ProductPrice>
        <BuyButton>Buy</BuyButton>
      </FlexEnd>
    </Container>
  );
}

export default DetailProduct;
