import React from "react";
import { SearchContainer, SearchIcon, Searchinput } from "./styles.js";
import search_icon from "../../assets/search_icon.svg";

const Searchbar = React.forwardRef(({ handleSearch, handleFocus }, ref) => {
  return (
    <SearchContainer>
      <SearchIcon src={search_icon} alt="" />
      <Searchinput
        ref={ref}
        type="text"
        placeholder="Cari Produk"
        onChange={handleSearch}
        onFocus={handleFocus}
      />
    </SearchContainer>
  );
});

export default Searchbar;
