import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";


export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
`;

export const HStack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  margin: 30px 20px;
`;

export const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LoveFill = styled(BsFillHeartFill)`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 20px;
  left: 10px;
  color: red;
`;

export const LoveOutline = styled(AiOutlineHeart)`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 20px;
  left: 10px;
`;
