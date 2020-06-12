import React from 'react';
import styled from 'styled-components/native';

const FlatList = styled.FlatList`
  width: 100%
  height: 100%
  background-color: #95d5b2;
`;

const ItemView = styled.View`
  padding: 50px;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
  align-items: center;
`;

const ItemText = styled.Text``;

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

function NewsItem({ item }) {
  return (
    <TouchableOpacity>
      <ItemView>
        <ItemText>
          {item.title}
          {"\n"}
        </ItemText>
        <ItemText>{item.id}</ItemText>
      </ItemView>
    </TouchableOpacity>
    
  );
}

export default function News() {
  return(
    <FlatList
      data={DATA}
      renderItem={({ item }) => <NewsItem item={item} />}
      keyExtractor={item => item.id}
    />
  );
}