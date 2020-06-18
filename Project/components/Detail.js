import React, { useState, useEffect } from 'react';
import { Button, View,  Alert, ActivityIndicator, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import News from './News';
import { setInterested } from '../scr/actions';
import Chart from './Chart';
import VolumeChart from './VolumeChart';


const PriceText = styled.Text`
  height: 10%;
  width: 100%;
  background-color: #ffff;
`;

const ChartView = styled.View`
  width: 100%;
  height: 50%;
  padding: 10px;
  background-color: #ffff;
`;

const BoldText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const Text = styled.Text`
  font-size: 23px;
`;

const Divider = styled.View`
  height: 1px;
  width: 80%;
  background-color: #6d6875;
`;

const TitleText = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

const AboutText = styled.Text`
  height: 30%;
  width: 100%;
  font-size: 25px;
  font-weight: bold;
`;

const AboutText_content = styled.Text`
  height: 50%;
  font-size: 20px;
`;

const AboutView = styled.View`
  width: 100%;
  height: 20%;
`;

const ChartScreenView = styled.View`
  width: 100%;
  height: 100%;
  background-color: #ffff;
`;

function ChartScreen() {
  const candleData = useSelector(state => state.candleData);

  return(
    <ChartScreenView>
      <TitleText>Volume Chart</TitleText>
      <ChartView>
        {candleData == null && <></>}
        {candleData.s == "ok" && <VolumeChart data = {candleData.v} />}
        {
          candleData.s != "ok" && 
          <BoldText>차트 데이터가 없습니다.</BoldText>
        }
      </ChartView>
    </ChartScreenView>
    
  );
}

function NewsScreen() {
  const companyNews = useSelector(state => state.companyNews);

  return (
    <View>
      <News news={companyNews}/>
    </View>
  );
}

function HomeScreen() {
  const dispatch = useDispatch();
  const stock = useSelector(state => state.stock);
  const price = useSelector(state => state.price);
  const exchange = useSelector(state => state.exchange);
  const candleData = useSelector(state => state.candleData);
  const about = useSelector(state => state.about);

  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(false);
  });

  const IsInterested = () => {
    var isIt = false;
    const interested = useSelector(state => state.interested);
    const stock = useSelector(state => state.stock);
    var i = 0;

    if( interested.length == 0){
      return false;
    }
    else{
      while(i <= interested.length){
        if(interested[i].description == stock.description){
          isIt = true;
          break;
        }
        else{i += 1}
      }
      return isIt;
    }
  }

  const isInterested = IsInterested();

  return(
    <>
      {loading && <ActivityIndicator size="large" color="#3d5a80" />}
      {!loading &&
        <>
          <>
            <PriceText>
              <Text>{stock.description}</Text>
              {"\n"}
              <BoldText>{exchange.currency} {price.c}</BoldText>
            </PriceText>
            {isInterested == false &&
              <Button
                title="관심 목록 추가하기"
                color="#e63946"
                onPress={() => {
                  setCount(count + 1);
                  dispatch(setInterested(stock)); 
                  Alert.alert('관심목록에 추가 되었습니다!');}}
              />
            }
            {isInterested == true &&
              <Button
                title="이미 추가된 목록입니다."
                disabled
                onPress={() => Alert.alert('관심목록에 이미 추가 되었습니다.')}
              />
            }
            <AboutView>
              <AboutText>
                About {stock.description}
              </AboutText>
              <AboutText_content>
                {about.finnhubIndustry}
                {"\n"}
                {about.weburl}
              </AboutText_content>
                
              
            </AboutView>
            <ChartView>
              {candleData == null && <></>}
              {candleData.s == "ok" && <Chart data = {candleData.c} exchange={exchange}/>}
              {
                candleData.s != "ok" && 
                <BoldText>차트 데이터가 없습니다.</BoldText>
              }
            </ChartView>
          </>
        </>
      }
    </>

  );
}

const Tab = createMaterialTopTabNavigator();

export default function Detail() {
  const stock = useSelector(state => state.stock);

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name={`${stock.description}`} component={HomeScreen} />
        <Tab.Screen name="뉴스" component={NewsScreen} />
        <Tab.Screen name="차트" component={ChartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}