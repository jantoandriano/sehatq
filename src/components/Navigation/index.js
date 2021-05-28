import React from "react";
import { Wrapper, NavbarItem } from "./styles";

function Navigation() {
  return (
    <Wrapper>
      <NavbarItem to="/beranda">Home</NavbarItem>
      <NavbarItem to="/feed">Feed</NavbarItem>
      <NavbarItem to="/cart">Cart</NavbarItem>
      <NavbarItem to="/profile">Profile</NavbarItem>
    </Wrapper>
  );
}

export default Navigation;
