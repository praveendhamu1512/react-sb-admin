// import React from "react";

// const LineChart =()=> {


//     return(

//         <div>
            
//             <h3>praveen</h3>            
//         </div>
//     )

// }
// export default LineChart;


// import React from "react";
// import { render } from "react-dom";

// import { LineChart, Line, XAxis, YAxis } from "recharts";

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };

// const data = [];

// const rand = 300;
// for (let i = 0; i < 7; i++) {
//   let d = {
//     year: 2000 + i,
//     value: { x: Math.random() * (rand + 50) + 100 }
//   };

//   data.push(d);
// }

// const App = () => (
//   <div style={styles}>
//     <LineChart
//       width={500}
//       height={300}
//       data={data}
//       margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
//     >
//       <Line type="monotone" dataKey="value.x" stroke="#8884d8" dot={false} />
//       <XAxis dataKey="year" />
//       <YAxis />
//     </LineChart>
//   </div>
// );

// export default App;

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)



const data = {

  labels: ["Jan", "", "Mar", "", "May", "","Jul","","Sep","","Nov",""],

  datasets: [
    
    {
      label: "Earnings Overview",
      data: [0,10000,5000,10000,15000, 20000, 15000,25000, 20000, 30000,25000,40000],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};
const legend = {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 14
  }
};

const options = {
  title: {
    display: true,
    text: "Chart Title"
  },
  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    ]
  }
};
export default function App() {
  return (
    <div className="App">
       <Line data={data} legend={legend} options={options} />
    </div>
  );
}