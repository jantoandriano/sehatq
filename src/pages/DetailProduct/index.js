import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
import { purchaseProduct, addWishList } from "../../features/productSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function DetailProduct() {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch()
  const { imageUrl, title, description, price } = useSelector((state) =>
    state.products.productsName.find((product) => product.id === id)
  );

  const handleBack = () => {
    history.goBack();
  };

  const handleShare = () => window.alert("Product shared");

  const handleBuy = () => {
    dispatch(purchaseProduct(id));
  }

  const handleAddWishList = () => {
    dispatch(addWishList(id))
  }

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
          <Love onClick={handleAddWishList}/>
        </HStack>
        <ProductDesc>{description}</ProductDesc>
      </ProductBody>

      <FlexEnd>
        <ProductPrice>{price}</ProductPrice>
        <BuyButton onClick={handleBuy} >Buy</BuyButton>
      </FlexEnd>
      <ToastContainer autoClose={2000} />

    </Container>
  );
}

export default DetailProduct;
