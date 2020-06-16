import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

import DetailScreen from './DetailScreen';

// import HomeScreen from './HomeScreen';
import { getStocks, setItem, selectPrice } from '../../scr/actions';

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

const PriceView = styled.Text`
  height: 15%;
  width: 100%
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
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const stocks = useSelector(state => state.stocks);

  useEffect(() => {setLoading(false);});

  return(
    <View>
      {loading && dispatch(getStocks("KS"))}
      {!loading && 
        <View>
          <SelectView>
            <Text>여기 시장 선택, 약간 상단바에 선택으로 되어 있고 누르면 밑에서 시장 목록들이 올라와서 선택할 수 있게?</Text>
          </SelectView>
          <FlatList
            data={stocks}
            renderItem={({ item }) => <Item item={item} navigation={navigation} />}
            keyExtractor={item => item.symbol}
          />      
        </View>
      }
    </View>
  )
}

function DetailsScreen({ navigation }) {

  return (
    <View>
      <DetailScreen/>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home"}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{title: "Detail"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}