import * as React from 'react';
import { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

import DetailScreen from './Market/DetailScreen';

import { setItem, resetInterested } from '../scr/actions';

const FlatList = styled.FlatList`
  width: 100%
  height: 100%
  background-color: #ffff;
`;

const ItemView = styled.View`
  padding: 20px;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
  flex-flow: row;
  align-items: center;
`;

const TouchableOpacity = styled.TouchableOpacity``;

const ViewText = styled.Text`
  height: 100%;
  width: 100%;
  font-size: 20px;
  padding-top: 60%;
  text-align: center;
`;
const StockView = styled.View`
  width: 100%;
  height: 100%;
`;

function Item({ item, navigation }) {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => {navigation.navigate('Details')
      dispatch(setItem(item))}}>
      <ItemView>
        <Text>{item.description}</Text>
      </ItemView>
    </TouchableOpacity>
    
  );
}

function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const interested = useSelector(state => state.interested);
  const dispatch = useDispatch();

  useEffect(() => {setLoading(false);});

  return(
    <View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {!loading && 
        <View>
        {interested.length == 0 && <ViewText>추가된 관심목록이 없습니다!</ViewText>}
        {interested.length != 0 && 
          <>
            <FlatList
              data={interested}
              renderItem={({ item }) => <Item item={item} navigation={navigation} />}
              keyExtractor={item => item.symbol}
            /> 
            <Button
                title="관심 목록 초기화하기"
                onPress={() => {
                  dispatch(resetInterested())}}
            />
          </>     
        }
        </View>
      }
    </View>
  );
}

function DetailsScreen({ navigation }) {

  return (
    <StockView>
      <DetailScreen/>
    </StockView>
  );
}

const Stack = createStackNavigator();

export default function InterestedScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home"}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{title: "Detail"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
