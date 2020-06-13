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

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Forth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Sixth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Seventh Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d892',
    title: 'Eighth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d4',
    title: 'Ninth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-147871e29d4',
    title: 'Tenth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145545e29d4',
    title: 'Eleventh Item',
  },
];

function Item({ item, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <ItemView>
        <Text>{item.description}</Text>
      </ItemView>
    </TouchableOpacity>
    
  );
}


export default function Market({ navigation }) {
  const stocks = useSelector(state => state.stocks);
  return(
    <View>
      <SelectView>
        <Text>여기 시장 선택, 약간 상단바에 선택으로 되어 있고 누르면 밑에서 시장 목록들이 올라와서 선택할 수 있게?</Text>
      </SelectView>
      <FlatList
        data={stocks}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.symbol}
      />      
    </View>
    
  );
}
