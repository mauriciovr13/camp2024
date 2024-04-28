import React from 'react';
import styled from 'styled-components/native';
import LogoIoasys from '../../assets/images/logo_ioasys.png';
import {Button, TextInput} from 'react-native';

const LoginScreen = () => {
  return (
    <StyledContainer>
      <StyledImage source={LogoIoasys} />
      <StyledTitle>Seja bem vindo!</StyledTitle>
      <StyledTitle>Calculadora IMC</StyledTitle>
      <TextInput placeholder={'usuario'} />
      <TextInput placeholder={'senha'} />
      <Button title={'entrar'} />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  background-color: #c1007e;
`;

const StyledImage = styled.Image`
  margin-top: 76px;
  align-self: center;
`;

const StyledTitle = styled.Text``;

export default LoginScreen;
