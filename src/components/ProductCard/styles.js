import styled from "styled-components";
import { Link } from "react-router-dom";

export const Image = styled.img`
  width: 100%;
  height: 200px;
  background-color: lavender;
`;

export const ProductName = styled.p`
  font-size: 15px;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  text-decoration: none;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
`;