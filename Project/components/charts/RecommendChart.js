import React from 'react';
import ApexCharts from 'react-apexcharts';

export default class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{data: null}],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        title: {
          text: 'Recommendation Trend',
          align: 'left'
        },
        xaxis: {
          type: 'datetime',
          categories: [null],},
        legend: {
          position: 'right',
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      },
    };

  }

  componentWillMount(){
    this.setData();
  }

  setData(){
    const data = this.props.data;
    let i = 0;
    let j = 0;
    let list = [];
    let buy = []; 
    let hold = [];
    let period = [];
    let sell = [];
    let strongBuy = [];
    let strongSell = []; 
    const type = ['buy', 'hold', 'sell', 'strongBuy', 'strongSell'];
    let total = [];
    console.log(data[0].buy);
    while (i <= 5){
      buy.push(data[i].buy);
      hold.push(data[i].hold);
      period.push(data[i].period);
      sell.push(data[i].sell);
      strongBuy.push(data[i].strongBuy);
      strongSell.push(data[i].strongSell);
      i++;
    }
    list.push(buy, hold, sell, strongBuy, strongSell);
    while (j <= 5){
      total.push({name: type[j], data: list[j]});
      j++;
    }
    
    var stateCopy = Object.assign({}, this.state);
    stateCopy.series = total;
    stateCopy.options.xaxis.categories = period;
    this.setState(stateCopy);
  }

  render() {
    return (
      <div id="chart">
        <ApexCharts options={this.state.options} series={this.state.series} type="bar" height={350} />
      </div>
    );
  }
}
