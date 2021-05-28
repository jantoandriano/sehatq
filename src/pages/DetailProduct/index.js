import React from "react";
import { useHistory } from "react-router-dom";
import { Container, HStack } from "../styles";
import {
  ProductImage,
  Back,
  Share,
  ProductBody,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  BuyButton,
} from "./styles";
import arrow from "../../assets/arrow_back.svg";
import share from "../../assets/share.svg";
import { Like } from "../Home/styles";

function DetailProduct() {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  const handleShare = () => window.alert("Product shared")

  return (
    <Container>
      <ProductImage>
        <HStack style={{ margin: "10px 10px" }}>
          <Back src={arrow} onClick={handleBack} />
          <Share src={share} onClick={handleShare} />
        </HStack>
      </ProductImage>

      <ProductBody>
        <HStack>
          <ProductTitle>Barang 1</ProductTitle>
          <Like />
        </HStack>
        <ProductDesc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus
          commodo viverra maecenas accumsan lacus. Magna ac placerat vestibulum
          lectus mauris ultrices eros in. A pellentesque sit amet porttitor
          eget. Lectus mauris ultrices eros in cursus turpis massa tincidunt.
          Dictumst vestibulum rhoncus est pellentesque. Potenti nullam ac tortor
          vitae purus faucibus ornare suspendisse sed. Tortor vitae purus
          faucibus ornare suspendisse sed nisi. Dolor sit amet consectetur
          adipiscing elit
        </ProductDesc>
      </ProductBody>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <ProductPrice>$400</ProductPrice>
        <BuyButton>Buy</BuyButton>
      </div>
    </Container>
  );
}

export default DetailProduct;
