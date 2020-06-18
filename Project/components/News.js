import React from 'react';
import { Image, StyleSheet, Linking } from 'react-native';
import styled from 'styled-components/native';

const FlatList = styled.FlatList`
  width: 100%
  height: 100%
  background-color: #fff;
`;

const ItemView = styled.View`
  padding: 50px;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
  align-items: center;
`;

const TitleText = styled.Text`
  font-weight: bold;
`;

const ItemText = styled.Text`
`;

const TouchableOpacity = styled.TouchableOpacity``;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 300,
    height: 200,
  },
});


function NewsItem({ item }) {
  return (
    <TouchableOpacity onPress={() => {Linking.openURL(item.url)}}>
      <ItemView>
        <Image
          style={styles.tinyLogo}
          source={{uri: item.image}}
        />
        <TitleText>
          {"\n"}
          {item.headline}
          {"\n"}
        </TitleText>
        <ItemText>{item.summary}</ItemText>
      </ItemView>
    </TouchableOpacity>
    
  );
}

export default function News({news}) {

  return(
    <FlatList
      data={news}
      renderItem={({ item }) => <NewsItem item={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
}