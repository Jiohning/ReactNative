import React, { useState } from 'react';
import { Button, View, ScrollView, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

import News from './News';
import { setInterested } from '../scr/actions';
import Chart from './Chart';

const PriceView = styled.View`
  height: 8%;
  width: 100%;
  background-color: #ffb5a7;
`;

const ChartView = styled.View`
  width: 100%;
  height: 30%;
  background-color: #fcd5ce;
`;

const BoldText = styled.Text`
  fontSize: 20px;
`;

const Text = styled.Text`
  fontSize: 15px;
`;

const Divider = styled.View`
  height: 1px;
  width: 80%;
  background-color: #6d6875;
`;

export default function Detail() {
  const dispatch = useDispatch();
  const stock = useSelector(state => state.stock);
  const price = useSelector(state => state.price);
  const exchange = useSelector(state => state.exchange);
  const companyNews = useSelector(state => state.companyNews);
  const peers = useSelector(state => state.peers);

  const [count, setCount] = useState(0);

  return(
    <View>
      <ScrollView>
        <PriceView>
          <BoldText>{stock.description}</BoldText>
          <Text>{exchange.currency} {price.c}</Text>
        </PriceView>
        {count==0 &&
          <Button
            title="관심 목록 추가하기"
            color="#f4acb7"
            onPress={() => {
              setCount(count + 1);
              dispatch(setInterested(stock)); 
              Alert.alert('관심목록에 추가 되었습니다!');}}
          />
        }
        {count!=0 &&
          <Button
            title="이미 추가된 목록입니다."
            disabled
            onPress={() => Alert.alert('관심목록에 이미 추가 되었습니다.')}
          />
        }
        <ChartView>
          <Chart/>
        </ChartView>
        <Divider/>
        <View>
          <News news={companyNews}/>
        </View>
      </ScrollView>
    </View>

  );
}