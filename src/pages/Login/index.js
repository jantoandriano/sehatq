import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Checkbox from "../../components/Checkbox";
import {
  Wrapper,
  Title,
  InputEmail,
  InputPassword,
  LoginFacebook,
  LoginGmail,
  SignIn,
} from "./styles";
import { VStack, HStack } from "../styles";
import {
  handleLoginFacebook,
  handleLoginGmail,
} from "../../features/authSlice";
import { FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignIn = () => {
    localStorage.setItem(
      "access_token",
      "ya29.a0AfH6SMBlwPgG00n1nwdtjKhWHvFZzAEQHK9I7NX_-LS8ZRktMbqfrQ0LTUGmzj88Enqp9s2H_"
    );
    history.push("/beranda");
  };

  const handleFacebook = async () => {
    dispatch(handleLoginFacebook());
  };

  const handleGmail = () => {
    dispatch(handleLoginGmail());
  };

  return (
    <Wrapper>
      <Title>LOGIN</Title>
      <VStack>
        <InputEmail type="text" />
        <InputPassword type="password" />
      </VStack>

      <HStack style={{ marginTop: "20px" }}>
        <Checkbox />
        <SignIn onClick={handleSignIn}>Sign in</SignIn>
      </HStack>

      <VStack style={{ marginTop: "20px" }}>
        <LoginFacebook onClick={handleFacebook}>
          <FaFacebookSquare style={{ marginRight: "10px" }} /> Sign in with
          Facebook
        </LoginFacebook>
        <LoginGmail onClick={handleGmail}>
          <SiGmail style={{ marginRight: "10px" }} />
          Sign in with Gmail
        </LoginGmail>
      </VStack>
    </Wrapper>
  );
}

export default Login;
