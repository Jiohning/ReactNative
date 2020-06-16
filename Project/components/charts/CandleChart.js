import React from 'react';
import ApexCharts from 'react-apexcharts';

export default class CandleChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        data: null
        }],

      options: {
        chart: {
          type: 'candlestick',
          height: 350
        },
        title: {
          text: 'CandleStick Chart',
          align: 'left'
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      },
    };

  }

  componentWillMount(){
    this.setData();
  }

  setData(){
    const candleData = this.props.data;
    let i = 0;
    let list = null;
    let date = null;
    let total = [];
    while (i !== candleData.c.length){
      date = candleData.t[i]*1000;
      list = [candleData.o[i], candleData.h[i], candleData.l[i], candleData.c[i]];
      total.push({x: new Date(date), y: list});
      i++;
    }
    var stateCopy = Object.assign({}, this.state);
    stateCopy.series[0].data = total;
    this.setState(stateCopy);
  }

  render() {
    return (
      <div id="chart">
        <ApexCharts options={this.state.options} series={this.state.series} type="candlestick" height={350}/>
      </div>
    );
  }
}