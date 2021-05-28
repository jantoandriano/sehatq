import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import Searchbar from "../../components/Searchbar";
import { Back } from "./styles";
import { HStack, Container } from "../styles";
import arrow from "../../assets/arrow_back.svg";
import SearchResult from "../../components/SearchResult";

function Search() {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleBack = () => {
    history.push("/beranda");
  };

  return (
    <Container>
      <HStack>
        <Back src={arrow} onClick={handleBack} />
        <Searchbar ref={ref} />
      </HStack>
      <SearchResult/>
      <SearchResult/>
      <SearchResult/>
      <SearchResult/>
    </Container>
  );
}

export default Search;
