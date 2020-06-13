import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import Market from '../../components/Market';
import { getStocks } from '../../scr/actions';

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {setLoading(false);});

  return(
    <View>
      {loading && dispatch(getStocks("KS"))}
      {!loading && <Market/>}
    </View>
  );
}