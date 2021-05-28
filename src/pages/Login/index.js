import React from "react";
import { useHistory } from "react-router-dom";
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

function Login() {
  const history = useHistory();

  const handleSignIn = () => {
    history.push("/beranda");
  };

  return (
    <Wrapper>
      <Title>LOGIN</Title>
      <InputEmail />
      <InputPassword />

      <HStack style={{ marginTop: "20px" }}>
        <Checkbox />
        <SignIn onClick={handleSignIn}>Sign in</SignIn>
      </HStack>

      <VStack style={{ marginTop: "20px" }}>
        <LoginFacebook>Sign in with Facebook</LoginFacebook>
        <LoginGmail>Sign in with Gmail</LoginGmail>
      </VStack>
    </Wrapper>
  );
}

export default Login;
