// import React from 'react'
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   AreaChart,
//   Area,
// } from "recharts";


// const Analytics = () => {




//   const data = [
//     {
//       name: "Jan",
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: "Feb",
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: "Mar",
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: "Apr",
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: "May",
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: "Jun",
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: "July",
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//     {
//       name: "Aug",
//       uv: 3490,
//       pv: 300,
//       amt: 2100,
//     },
//     {
//       name: "Sept",
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     }, {
//       name: "Oct",
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     }, {
//       name: "Nov",
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     }, {
//       name: "Dec",
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];
//   return (
    
//     <div class="container-fluid text-center">
//     <div class="row row-cols-2">
//       <div class="col "> <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 20,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="pv" stackId="a" fill="#8884d8" />
//           <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
//         </BarChart>
//       </ResponsiveContainer></div>
//       <div class="col">Column</div>
//       <div class="col">Column</div>
//       <div class="col">Column</div>
//     </div>
//   </div>
//   )
// }
// export default Analytics




import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/stacked-bar-chart-7fwfgj';

  render() {
    return (
      <ResponsiveContainer width="80%" height="50%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
