import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from 'react-icons/ai';

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  border: 1px solid black;

`;

export const ProductName = styled.p`
  font-size: 15px;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  text-decoration: none;
  position: relative;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: black; 
`;

export const Love = styled(AiOutlineHeart)`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 20px;
  left: 10px;
  
`
