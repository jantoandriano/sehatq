import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Like, Scroll } from "./styles";
import { HStack, VStack, Container } from "../styles";
import Searchbar from "../../components/Searchbar";
import Category from "../../components/Category";
import ProductCard from "../../components/ProductCard";
import Navigation from "../../components/Navigation";
import { fetchProducts } from "../../features/productSlice";

function Home() {
  const searchRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.products.categories);
  const products = useSelector((state) => state.products.productsName);


  const handleFocus = (e) => {
    history.push("/search-page");
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <HStack>
          <Like />
          <Searchbar
            ref={searchRef}
            handleFocus={handleFocus}
          />
        </HStack>
        <Scroll>
          {categories.map((category) => (
            <Category key={category.id} {...category} />
          ))}
        </Scroll>
        <VStack>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </VStack>
      </Container>
      <Navigation />
    </>
  );
}

export default Home;
