import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Searchbar from "../../components/Searchbar";
import { Back } from "./styles";
import { HStack, Container } from "../styles";
import arrow from "../../assets/arrow_back.svg";
import Item from "../../components/Item";
import filterSearch from "../../utils/filter";

function Search() {
  const [input, setInput] = useState("");
  const filterProduct = useSelector((state) =>
    filterSearch(input, state.products.productsName)
  );
  const searchRef = useRef();
  const history = useHistory();


  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleBack = () => {
    history.push("/beranda");
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  const items = filterProduct.map(val => (<Item key={val.id} {...val} />))

  return (
    <Container>
      <HStack>
        <Back src={arrow} onClick={handleBack} />
        <Searchbar ref={searchRef} value={input} handleSearch={handleSearch} />
      </HStack>
      {input && items}
    </Container>
  );
}

export default Search;
