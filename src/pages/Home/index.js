import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Like, Scroll } from "./styles";
import { HStack, VStack, Container } from "../styles";
import Searchbar from "../../components/Searchbar";
import Category from "../../components/Category";
import ProductCard from "../../components/ProductCard";
import Navigation from "../../components/Navigation";

function Home() {
  const [input, setInput] = useState("initialState");
  const searchRef = useRef(null);
  const history = useHistory();

  const handleSearch = () => {
    setInput(searchRef.current.value);
  };

  const handleFocus = (e) => {
    history.push("/search-page")
  }

  return (
    <>
      <Container>
        <HStack>
          <Like />
          <Searchbar ref={searchRef} handleSearch={handleSearch} handleFocus={handleFocus} />
        </HStack>
        <Scroll>
          <Category title="Baju" />
          <Category title="Baju" />
          <Category title="Baju" />
          <Category title="Baju" />
          <Category title="Baju" />
          <Category title="Baju" />
          <Category title="Baju" />
          <Category title="Baju" />
        </Scroll>
        <VStack>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </VStack>
      </Container>
      <Navigation />
    </>
  );
}

export default Home;
