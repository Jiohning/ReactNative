import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import Market from '../../components/StockList';
import { getStocks } from '../../scr/actions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {setLoading(false);});

  return(
    <View>
      {loading && dispatch(getStocks("US"))}
      {!loading && <Market/>}
    </View>
  );
}