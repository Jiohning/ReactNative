import React from 'react';
import styled from 'styled-components/native';

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  padding: 10px;
  width: 100%;
`;
const TextInput = styled.TextInput`
  background-color: #fff;
  border: 1px solid #FFB5A7;
  margin: 5px;
`;

export default ({onSubmit}) => {
  const [value, setValue] = React.useState("");


  return(

    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TextInput
        placeholder = "Add a new item"
        onChangeText={v => setValue(v)}
        value = {value}
        onSubmitEditing={() => {
          onSubmit(value);
          setValue("");
        }}
      />
    </KeyboardAvoidingView>
  
  )
}