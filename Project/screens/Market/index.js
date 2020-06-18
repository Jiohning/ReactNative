import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

import DetailScreen from './DetailScreen';
import Exchanges from '../../components/Exchanges';

import { getStocks, setItem, selectPrice } from '../../scr/actions';

const SelectView1 = styled.View`
  height: 100%;
  width: 100%
  background-color: #d8f3dc;
`;

const SelectView2 = styled.View`
  height: 20%;
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

function HomesScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const stocks = useSelector(state => state.stocks);
  const exchange = useSelector(state => state.exchange);

  useEffect(() => {setLoading(false);});

  return(
    <View>
      {loading && null}
      {!loading && 
        <>
          {!exchange && 
            <SelectView1>
              <Exchanges/>
            </SelectView1>
          }
          {exchange &&
          <View>
            <SelectView2>
              <Exchanges/>
            </SelectView2>
            <FlatList
              data={stocks}
              renderItem={({ item }) => <Item item={item} navigation={navigation} />}
              keyExtractor={item => item.symbol}
            />  
          </View>
          }
        </>
      }
    </View>
  )
}

function DetailsScreen({ navigation }) {

  return (
    <ScrollView>
      <View>
        <DetailScreen/>
      </View>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}

const Stack = createStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomesScreen} options={{title: "Home"}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{title: "Detail"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}