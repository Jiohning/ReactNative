import React from 'react';
import { useSelector } from 'react-redux';
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


function NewsItem({ item }) {
  return (
    <TouchableOpacity>
      <ItemView>
        <ItemText>
          {item.headline}
          {"\n"}
        </ItemText>
        <ItemText>{item.summary}</ItemText>
      </ItemView>
    </TouchableOpacity>
    
  );
}

export default function News() {
  const generalNews = useSelector(state => state.generalNews);

  return(
    <FlatList
      data={generalNews}
      renderItem={({ item }) => <NewsItem item={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
}