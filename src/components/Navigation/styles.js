import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarItem = styled(Link)`
  padding: 10px;
  border: 1px solid black;
  background-color: black;
  color: white;
  text-decoration: none;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: black;
  position: fixed;
  bottom: 0;
  height: 60px;
  align-items: center;
`;
