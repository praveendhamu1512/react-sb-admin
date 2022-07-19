// const Pie =()=> {

//     return(
//         <div>
//             praveen
//         </div>
//     )
// }

// export default Pie

// import React from "react";
// import ReactApexChart from 'react-apexcharts';
// export default class ApexChart extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
      
//         direct: [55, 35, 15],
//         dire: [55, 35],
//         options: {
//           chart: {
//             type: 'donut',
//           },
//           responsive: [{
//             breakpoint: 480,
//             options: {
//               chart: {
//                 width: 200
//               },
//               legend: {
//                 position: 'bottom'
//               }
//             }
//           }]
//         },
      
      
//       };
//     }

  

//     render() {
//       return (
        

//   <div id="chart">
// <ReactApexChart options={this.state.options} series={this.state.direct} type="donut" dire={this.state.dire} />
// </div>


//       );
//     }
//   }

  //const domContainer = document.querySelector('#app');


import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: ["Diresct", "Social", "Referal"],
  datasets: [
    {
      data: [50, 35, 15],
      backgroundColor: ["#2E59D9", "#17A673", "#2C9FAF"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      borderWidth: 2,
      radius: "90%",
    //   innerRadius: "10%",
    //   outerRadius:"20%"
    }
  ]
};
export default function App() {
  return <Doughnut data={data} />;
}