import React from 'react';
import { TextInput, Button, Alert } from 'react-native';
import styled from 'styled-components/native';

const LoginView = styled.View`
  width: 100%;
  height: 100%
  padding: 20px;
  padding-top: 60%;
  background-color: #ffff;
`;

const Divider = styled.View`
  height: 2%;
`;

export default function InfoScreen() {
  const [id, onChangeIDText] = React.useState('');
  const [pw, onChangePWText] = React.useState('');

  return (
    <LoginView>
      <TextInput
        placeholder = "ID"
        style={{ height: 40, borderColor: 'gray', borderWidth: 2, borderRadius: 10 }}
        onChangeText={text => onChangeIDText(text)}
        value={id}
        onSubmitEditing={() => {
          onChangeIDText("");
        }}
      />
      <Divider/>
      <TextInput
        placeholder = "Password"
        style={{ height: 40, borderColor: 'gray', borderWidth: 2, borderRadius: 10 }}
        onChangeText={text => onChangePWText(text)}
        value={pw}
        onSubmitEditing={() => {
          onChangePWText("");
        }}
      />
      <Divider/>
      <Button
        title="로그인"
        onPress={() => Alert.alert('로그인 기능이 완성되지 않았습니다..')}
      />
      <Divider/>
      <Button
        title="회원가입"
        onPress={() => Alert.alert('회원가입 기능이 완성되지 않았습니다..')}
      />
    </LoginView>
    
  );
}
