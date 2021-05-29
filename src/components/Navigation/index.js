import React from "react";
import { Wrapper, NavbarItem } from "./styles";

function Navigation() {
  return (
    <Wrapper>
      <NavbarItem to="/beranda">Home</NavbarItem>
      <NavbarItem to="/">Feed</NavbarItem>
      <NavbarItem to="/wishlist">Cart</NavbarItem>
      <NavbarItem to="/purchase">Profile</NavbarItem>
    </Wrapper>
  );
}

export default Navigation;
