import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  text-decoration: none;
  color: black;
`;

export const Image = styled.img`
  width: 90px;
  height: 90px;
  background-color: lavender;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: center;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: black; 
`;

export const Title = styled.p`
  font-size: 15px;
`;

export const Price = styled.p`
  font-size: 15px;
  margin-top: 20px;
`;
