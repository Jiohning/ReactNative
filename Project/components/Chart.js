import React from 'react';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts';
import { View } from 'react-native';

export default class Chart extends React.PureComponent {
  render(){
    const data = this.props.data;
    const exchange = this.props.exchange;
    const contentInset = { top: 20, bottom: 20 };

    return (
        <View style={{ height: 200, flexDirection: 'row' }}>
            <YAxis
                data={data}
                contentInset={contentInset}
                svg={{
                    fill: 'grey',
                    fontSize: 10,
                }}
                numberOfTicks={10}
                formatLabel={(value) => `${value} ${exchange.currency}`}
            />
            <LineChart
                style={{ flex: 1, marginLeft: 16 }}
                data={data}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={contentInset}
            >
                <Grid />
            </LineChart>
        </View>
    )
  }
}