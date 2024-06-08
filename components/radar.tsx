import React from "react";
import { Radar } from "react-chartjs-2";

const data = {
  labels: ["Commits", "Code review", "Issues", "Pull requests"],
  datasets: [
    {
      label: "My First Dataset",
      data: [82, 3, 5, 10],
      backgroundColor: "rgba(34, 202, 236, .2)",
      borderColor: "rgba(34, 202, 236, 1)",
      pointBackgroundColor: "rgba(34, 202, 236, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(34, 202, 236, 1)",
    },
  ],
};

const options = {
  scale: {
    ticks: { beginAtZero: true },
  },
};

const RadarChartComponent = () => (
  <div>
    <Radar data={data} />
  </div>
);

export default RadarChartComponent;
