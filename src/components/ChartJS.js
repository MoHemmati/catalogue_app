import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';



const ChartJs = (props) => {


    const chartData = props.chartData;
    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        title: {
            display: true,
            text: 'Chart Title',
        }
    }
    return (
        <div className='ChartJS'>
            <Chart
                data={chartData}
                height={260}
                type='bar'
                options={options}
            />
        </div>
    )
};

export default ChartJs;