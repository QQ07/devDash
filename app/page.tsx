"use client";

import Link from "next/link";
import { data as dataa } from "@/datao";
import { Radar } from "react-chartjs-2";
// data:{
//     data: {
//         AuthorWorklog: {
//             activityMeta: {
//                 label: string;
//                 fillColor: string;
//             }[];
//             rows: {
//                 name: string;
//                 totalActivity: {
//                     name: string;
//                     value: string;
//                 }[];
//                 dayWiseActivity: {
//                     date: string;
//                     items: {
//                         children: {
//                             count: string;
//                             label: string;
//                             fillColor: string;
//                         }[];
//                     };
//                 }[];
//                 activeDays: {
//                     ...;
//                 };
//             }[];
//         };
//     };
// }
import {
  Chart as ChartJS,
  LineElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  // CategoryScale, // x-axis
  // LinearScale, //y axis
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

export default function Home() {
  let names: string[] = dataa.AuthorWorklog.rows.map((user) => user.name);
  let stats = dataa.AuthorWorklog.rows;
  let radarColors = [
    {
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
    {
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgb(75, 192, 192)",
      pointBackgroundColor: "rgb(75, 192, 192)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(75, 192, 192)",
    },
    {
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderColor: "rgb(153, 102, 255)",
      pointBackgroundColor: "rgb(153, 102, 255)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(153, 102, 255)",
    },
    {
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      borderColor: "rgb(255, 159, 64)",
      pointBackgroundColor: "rgb(255, 159, 64)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 159, 64)",
    },
    {
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      borderColor: "rgb(255, 206, 86)",
      pointBackgroundColor: "rgb(255, 206, 86)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 206, 86)",
    },
    {
      backgroundColor: "rgba(201, 203, 207, 0.2)",
      borderColor: "rgb(201, 203, 207)",
      pointBackgroundColor: "rgb(201, 203, 207)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(201, 203, 207)",
    },
    {
      backgroundColor: "rgba(129, 199, 132, 0.2)",
      borderColor: "rgb(129, 199, 132)",
      pointBackgroundColor: "rgb(129, 199, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(129, 199, 132)",
    },
    {
      backgroundColor: "rgba(255, 87, 34, 0.2)",
      borderColor: "rgb(255, 87, 34)",
      pointBackgroundColor: "rgb(255, 87, 34)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 87, 34)",
    },
    {
      backgroundColor: "rgba(0, 188, 212, 0.2)",
      borderColor: "rgb(0, 188, 212)",
      pointBackgroundColor: "rgb(0, 188, 212)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(0, 188, 212)",
    },
  ];
  let labels: string[] = [];
  dataa.AuthorWorklog.activityMeta.forEach((item) => {
    labels.push(item.label);
  });
  console.log(dataa.AuthorWorklog.activityMeta);
  const data = {
    labels: labels,
    datasets: names.map((name, index) => {
      let dataaa: Number[] = [];
      stats.forEach((stat) => {
        if (stat.name == name) {
          stat.totalActivity.forEach((act) => {
            dataaa.push(Number(act.value));
          });
        }
      });
      return {
        label: name,
        data: dataaa,
        fill: true,
        ...radarColors[index],
      };
    }),
  };
  let options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: -10,
        suggestedMax: 30,
      },
    },
  };
  // console.log(data);
  return (
    <>
      

      <p className="text-xl">Comparison of All the three developers</p>
      <div className="bg-white w-1/2">
        <Radar data={data} options={options}></Radar>
      </div>
    </>
  );
}
