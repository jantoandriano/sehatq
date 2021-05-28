import React from "react";
import { Wrapper, Image, SearchResultBody, Title, Price } from "./styles";


function SearchResult() {
  return (
    <Wrapper>
      <Image />
      <SearchResultBody>
        <Title>Baju</Title>
        <Price>150000</Price>
      </SearchResultBody>
    </Wrapper>
  );
}

export default SearchResult;
