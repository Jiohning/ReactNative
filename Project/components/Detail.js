import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { Divider } from 'react-native-elements';

import CandleChart from './charts/CandleChart';


const PriceView = styled.Text`
  height: 20%;
  width: 100%;
  font-size: 15px;
`;

const ChartView = styled.View`
  width: 100%;
`;

export default function Datail() {
  const stock = useSelector(state => state.stock);
  const price = useSelector(state => state.price);
  const exchange = useSelector(state => state.exchange);
  const news = useSelector(state => state.companyNews);
  const candleData = useSelector(state => state.candleData);
  const peers = useSelector(state => state.peers);

  return(
    <View>
      <PriceView>
        {price.c}
      </PriceView>
      <Divider style={{ backgroundColor: 'blue' }} />
      <ChartView>
        {candleData === null && <></>}
        {candleData.s === "ok" && <CandleChart data = {candleData}/>}
        {
          candleData.s !== "ok" && 
          <Text>데이터가 없습니다.</Text>
        }
      </ChartView>
      

    </View>
    
  );
}