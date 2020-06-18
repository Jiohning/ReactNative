import React from 'react';
import {
  Button,
  Text,
  TextInput,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { useDispatch, useSelector } from 'react-redux';
import { selectExchange, getStocks } from '../scr/actions';
// import RNPickerSelect, { defaultStyles } from './debug';

const exchanges = [
  {
    value: {
      code: "indices",
      currency: "",
      name: "World Indices"
    },
    label: "World Indices",
      
  },
  {
    value: {
      code: "US",
      currency: "USD",
      name: "US exchanges"
    },
    label: "US exchanges",
  },
  {
    value: {
      code: "KQ",
      currency: "KRW",
      name: "KOREA EXCHANGE (KOSDAQ)"
    },
    label: "KOREA EXCHANGE (KOSDAQ)",
  },
  {
    value: {
      code: "KS",
      currency: "KRW",
      name: "KOREA EXCHANGE (STOCK MARKET)"
    },
    label: "KOREA EXCHANGE (STOCK MARKET)",
  },
  {
    value: {
      code: "TO",
      currency: "CAD",
      name: "TORONTO STOCK EXCHANGE"
    },
    label: "TORONTO STOCK EXCHANGE",
  },
  {
    value: {
      code: "SS",
      currency: "CNY",
      name: "SHANGHAI STOCK EXCHANGE"
    },
    label: "SHANGHAI STOCK EXCHANGE",
      
  },
  {
    value: {
      code: "T",
      currency: "JPY",
      name: "TOKYO STOCK EXCHANGE-TOKYO PRO MARKET",
    },
    label: "TOKYO STOCK EXCHANGE-TOKYO PRO MARKET"
  },
];

export default function Exchanges() {
  const placeholder = {
    label: 'Select a Exchanges',
    value: null,
    color: '#9EA0A4',
  };

  const dispatch = useDispatch();
  const exchange = useSelector(state => state.exchange);

  return(
    <View style={styles.container}>
      {/* and iOS onUpArrow/onDownArrow toggle example */}
      <RNPickerSelect
        placeholder={placeholder}
        items={exchanges}
        onValueChange={data => {
          dispatch(selectExchange(data));
          dispatch(getStocks(data.code));
        }}
        style={pickerSelectStyles}
        value={exchange}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});