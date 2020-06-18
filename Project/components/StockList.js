import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

const SelectView = styled.View`
  height: 10%;
  width: 100%
  background-color: #d8f3dc;
`;

const FlatList = styled.FlatList`
  width: 100%
  height: 90%
  background-color: #b7e4c7;
`;

const ItemView = styled.View`
  padding: 20px;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
  flex-flow: row;
  align-items: center;
`;

const TouchableOpacity = styled.TouchableOpacity``;



function Item({ item }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <ItemView>
        <Text>{item.description}</Text>
      </ItemView>
    </TouchableOpacity>
    
  );
}


export default function StockList() {
  const interested = useSelector(state => state.interested);
  return(
    <View>
      <FlatList
        data={interested}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.symbol}
      />      
    </View>
    
  );
}
